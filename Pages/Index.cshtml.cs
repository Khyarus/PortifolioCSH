using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text;

[IgnoreAntiforgeryToken]
public class IndexModel : PageModel
{
    private static float A = 0;
    private static float B = 0;
    // Tamanho aumentado com alta resolução
    private const int width = 100;
    private const int height = 100;

    // Configurações de alta qualidade
    private const float thetaStep = 0.03f;  // Mais pontos = mais resolução
    private const float phiStep = 0.015f;   // Passo mais fino
    private const string asciiGradient = ".,-~:;=!*#$@";  // Gradiente mais suave

    public string DonutFrame { get; set; } = string.Empty;

    public void OnGet()
    {
        DonutFrame = GenerateDonutFrame();
    }

    public IActionResult OnGetDonutFrame()
    {
        Response.Headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
        Response.Headers["Pragma"] = "no-cache";
        Response.Headers["Expires"] = "0";

        return new JsonResult(GenerateDonutFrame());
    }

    private string GenerateDonutFrame()
    {
        var b = new char[width * height];
        var z = new float[width * height];
        Array.Fill(b, ' ');
        Array.Fill(z, 0);

        // Renderização de alta qualidade
        for (float theta = 0; theta < 6.28f; theta += thetaStep)
        {
            for (float phi = 0; phi < 6.28f; phi += phiStep)
            {
                float sinPhi = MathF.Sin(phi);
                float cosTheta = MathF.Cos(theta);
                float sinA = MathF.Sin(A);
                float sinTheta = MathF.Sin(theta);
                float cosA = MathF.Cos(A);

                float circleOffset = cosTheta + 2;
                float inverseDist = 1 / (sinPhi * circleOffset * sinA + sinTheta * cosA + 5);
                float cosPhi = MathF.Cos(phi);
                float cosB = MathF.Cos(B);
                float sinB = MathF.Sin(B);

                float t = sinPhi * circleOffset * cosA - sinTheta * sinA;

                // Posicionamento preciso
                int x = (int)(width / 2 + width / 2.8f * inverseDist *
                             (cosPhi * circleOffset * cosB - t * sinB));
                int y = (int)(height / 2 + height / 3.5f * inverseDist *
                             (cosPhi * circleOffset * sinB + t * cosB));

                int o = x + width * y;

                // Cálculo de luminosidade mais preciso
                int luminance = (int)(10 * ((sinTheta * sinA - sinPhi * cosTheta * cosA) * cosB
                                  - sinPhi * cosTheta * sinA - sinTheta * cosA
                                  - cosPhi * cosTheta * sinB));

                if (y < height && y >= 0 && x >= 0 && x < width && inverseDist > z[o])
                {
                    z[o] = inverseDist;
                    b[o] = asciiGradient[Math.Clamp(luminance, 0, asciiGradient.Length - 1)];
                }
            }
        }

        // Atualização suave dos ângulos
        A += 0.04f;
        B += 0.02f;
        if (A > 6.28f) A -= 6.28f;
        if (B > 6.28f) B -= 6.28f;

        // Construção do frame otimizada
        var sb = new StringBuilder(width * height + height); // Pré-alocação
        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                sb.Append(b[y * width + x]);
            }
            if (y < height - 1) sb.Append('\n');
        }

        return sb.ToString();
    }
}