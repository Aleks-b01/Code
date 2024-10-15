#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

char userInput[];
double num1;
double num2;
double result;
char num1str[];
char num2str[];
char analyzer;
char temp;
int length;
int length1 = 0;
int length2 = 0;
int operator = 0;
int option;
int inputCount = 0;

void getUserInput() {
	printf("\n");
	scanf("%s", userInput);
	length = strlen(userInput);
	processUserInput();
}

void processUserInput() {
	for (int i = length; i >= 0; i--) {
		temp = userInput[i];
		if (isdigit(temp) && (temp == '.' || temp == ',')) {
			length2++;
		} else {
			break;
		}
	}
	for (int i = length - length2; i >= 0; i--) {
		temp = userInput[i];
		if (isdigit(temp) && (temp == '.' || temp == ',')) {
			length1++;
		}
	}
	for (int i = length; i >= 0; i--) {
		temp = userInput[i];
		if (isdigit(temp)) {
			num2str[length2 - 1] = temp;
			length2--;
		} else if (temp == '.' || temp == ',') {
			num2str[length2 - 1] = '.';
			length2--;
		} else {
			break;
		}
	}
	num2 = atof(num2str);
	for (int i = length - length2; i >= 0; i--) {
		temp = userInput[i];
		if (isdigit(temp)) {
			num1str[length1 - 1] = temp;
			length1--;
		} else if (temp == '.' || temp == ',') {
			num1str[length1 - 1] = '.';
			length1--;
		}
	}
	num1 = atof(num1str);
	for (int i = length; i > 0; i--) {
		temp = userInput[i];
		if (temp == '+') {
			operator = 1;
		} else if (temp == '-') {
			operator = 2;
		} else if (temp == '*') {
			operator = 3;
		} else if (temp == '/') {
			operator = 4;
		}
	}
	calculate();
}

void calculate() {
	if (operator == 1) {
		result = num1 + num2;
		printf("\n%.2f\n", result);
	} else if (operator == 2) {
		result = num1 - num2;
		printf("\n%.2f\n", result);
	}
}

int main() {
	while(1) {
		printf("\nBetterCalc\n");
		printf("\nChoose an Option:\n");
		printf("1. Calculator\n");
		printf("2. History\n");
		printf("3. Settings\n");
		printf("4. Exit\n");
		scanf("%d", &option);
		switch(option) {
			case 1:
				printf("\nIn Works\n");
				break;
			case 2:
				printf("\nIn Works\n");
				break;
			case 3:
				break;
				printf("\nIn Works\n");
			case 4:
				return 0;
		}
	}
	return 0;
}
