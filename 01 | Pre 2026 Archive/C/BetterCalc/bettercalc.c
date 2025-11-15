#include <stdio.h>
#include <string.h>

FILE *hFile;

int choice;
char userInput[50];
double num1;
double num2;
double result;
char operator;
int historyCount = 0;
double nums1[300];
double nums2[300];
double results[300];
char operators[300];
int settingsChoice;
int historyChoice;

int printClearHistory() {
	while(1) {
		printf("\n\n1. Only Clear current history\n2. Clear all history (including files)\n3. Exit");
		scanf("%d", &historyChoice);
		switch (historyChoice) {
			case 1:
				return 0;
				break;
			case 2:
				return 0;
				break;
			case 3:
				return 0;
				break;
			default:
				printf("\n\nPlease Choose a valid option\n");
				break;
		}
	}
	return 0;
}

int printSettings() {
	while(1) {
		printf("\n\nSettings:\n\n1. Save\n2. Load\n3. Clear History\n4. Decimal Points\n5. Exit");
		scanf("%d", &settingsChoice);
		switch (settingsChoice) {
			case 1:
				break;
			case 2:
				break;
			case 3:
				printClearHistory();
				break;
			case 4:
				break;
			case 5:
				return 0;
				break;
			default:
				printf("\n\nChoose a valid option\n");
				break;
		}
	}
	return 0;
}

int displayHistory() {
	if (historyCount == 0) {
		printf("\n\nHistory is empty\n");
	} else {
		printf("\n\nHistory:\n");
		for (int i = historyCount; i > 0; i--) {
			printf("%.2lf %c %.2lf = %.2lf\n", nums1[i], operators[i], nums2[i], results[i]);
		}
	}
	return 0;
}

int calculate() {
	scanf("%s", userInput);
	sscanf(userInput, "%lf%c%lf", &num1, &operator, &num2);
	historyCount++;
	nums1[historyCount] = num1;
	nums2[historyCount] = num2;
	operators[historyCount] = operator;
	if (operator == '+') {
		result = num1 + num2;
		printf("\n%.2lf\n", result);
		results[historyCount] = result;
	} else if (operator == '-') {
		result = num1 - num2;
		printf("\n%.2lf\n", result);
		results[historyCount] = result;
	} else if (operator == '*') {
		result = num1 * num2;
		printf("\n%.2lf\n", result);
		results[historyCount] = result;
	} else if (operator == '/') {
		if (num2 == 0) {
			printf("\nYou can't divide by zero\n");
			historyCount--;
		} else {
			result = num1 / num2;
			printf("\n%.2lf\n", result);
			results[historyCount] = result;
		}
	} else {
		printf("\nPlease enter valid inputs\n");
	}
	return 0;
}

int main() {
	printf("\nBetterCalc");
	while(1) {
		printf("\n\n\n\nChoose an Option:\n1. Calculate\n2. History\n3. Settings\n4. Exit\n");
		scanf("%d", &choice);
		switch (choice) {
			case 1:
				calculate();
				break;
			case 2:
				displayHistory();
				break;
			case 3:
				printSettings();
				break;
			case 4:
				return 0;
				break;
			default:
				printf("\n\nChoose a valid option'n");
				break;
		}
	}
	return 0;
}
