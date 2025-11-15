#include <stdio.h>
#include <stdbool.h>

float num1;
float num2;
float result;
int option;
int operator;
bool dv0 = false;
bool hasRun = false;

void calculate() {
	if (hasRun == false) {
		printf("Type a Number\n");
		scanf("%f", &num1);
		printf("1. Addition\n");
		printf("2. Subtraction\n");
		printf("3. Multiplication\n");
		printf("4. Division\n");
		printf("Pick a Action\n");
		scanf("%d", &operator);
		printf("Type a Number\n");
		scanf("%f", &num2);
	} else {
		scanf("%f", &num1);
		scanf("%d", &operator);
		scanf("%f", &num2);
	}
	switch(operator) {
		case 1:
			result = num1 + num2;
			break;
		case 2:
			result = num1 - num2;
			break;
		case 3:
			result = num1 * num2;
			break;
		case 4:
			if (num2 == 0) {
				printf("You can't divide by 0\n");
				dv0 = true;
			} else {
				result = num1 / num2;
			}
			break;
	}
	if (dv0 == false) {
		printf("Your result is:\n");
		printf("%f\n", result);
	} else {
		dv0 = false;
	}
	hasRun = true;
}

int main() {
	while(1) {
		printf("\nSimple Calculator\n");
		printf("Choose an Option:\n");
		printf("1. Calculate\n");
		printf("2. Exit\n");
		scanf("%d", &option);
		switch(option) {
			case 1:
				calculate();
				break;
			case 2:
				return 0;
		}
	}
	return 0;
}
