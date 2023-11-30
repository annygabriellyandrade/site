import java.util.Scanner;

public class ArvoreNatal {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe a altura da árvore de Natal: ");
        int altura = scanner.nextInt();

        desenharArvore(altura);
    }

    private static void desenharArvore(int altura) {
        for (int i = 0; i < altura; i++) {
            for (int j = 0; j < altura - i - 1; j++) {
                System.out.print(" ");
            }
            for (int k = 0; k < 2 * i + 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Tronco da árvore
        for (int i = 0; i < altura - 1; i++) {
            System.out.print(" ");
        }
        System.out.println("|");
    }
}
