import java.util.Scanner;

public class Calc {
	
	double num1;
	double num2;
	int operator;
	int choice;
	double result;
	Scanner scanner = new Scanner(System.in);

	public void run() throws InterruptedException {
		System.out.println("\nSimple Calculator");
		System.out.println("\nChoose an option:");
		System.out.println("1. Calculate");
		System.out.println("2. Tutorial");
		System.out.println("3. Exit");
		choice = scanner.nextInt();
		switch(choice) {
			case 1:
				calculate();
				break;
			case 2:
				tutorial();
				break;
			case 3:
				System.out.println("\nExiting...");
				return;
			default:
				System.out.println("\nInvalid Input");
			}
	}

	public void calculate() {
		System.out.println("\n");
		num1 = scanner.nextDouble();
		operator = scanner.nextInt();
		num2 = scanner.nextDouble();
		switch(operator) {
			case 1:
				result = num1 + num2;
				System.out.println("\n=");
				System.out.println(result);
				break;
			case 2:
				result = num1 - num2;
				System.out.println("\n=");
				System.out.println(result);
				break;
			case 3:
				result = num1 * num2;
				System.out.println("\n=");
				System.out.println(result);
				break;
			case 4:
				if(num2 == 0) {
					System.out.println("\nCan't divide by zero");
				} else {
					result = num1 / num2;
					System.out.println("\n=");
					System.out.println(result);
				}
				break;
		}
		run();
	}

	public void tutorial() throws InterruptedException {
		System.out.println("\nIn order to use the calculator, you simply input a number, followed by the operator number, and your second number");
		wait(3000);
		System.out.println("Let's try it out!");
		System.out.println("Input a number:");
		num1 = scanner.nextDouble();
		System.out.println("\nNow input a operator. These are your options:");
		System.out.println("1. Addition");
		System.out.println("2. Subtraction");
		System.out.println("3. Multiplication");
		System.out.println("4. Division");
		System.out.println("");
		operator = scanner.nextInt();
		System.out.println("And now input your second number:");
		num2 = scanner.nextDouble();
		System.out.println("\nCalculating.");
		wait(1000);
		System.out.println("\nCalculating..");
		wait(1000);
		System.out.println("\nCalculating...");
		wait(1000);
		switch(operator) {
			case 1:
				result = num1 + num2;
				System.out.println("\n=");
				System.out.println(result);
				break;
			case 2:
				result = num1 - num2;
				System.out.println("\n=");
				System.out.println(result);
				break;
			case 3:
				result = num1 * num2;
				System.out.println("\n=");
				System.out.println(result);
				break;
			case 4:
				if(num2 == 0) {
					System.out.println("\nCan't divide by zero");
				} else {
					result = num1 / num2;
					System.out.println("\n=");
					System.out.println(result);
				}
				break;
		}
		wait(1000);
		System.out.println("And just like that, you've learned how to use this calculator!");
		wait(1000);
		run();
	}
}
