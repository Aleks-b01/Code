#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

char userInput[];
char num1[];
char num2[];
char analyzer;
int length;
int operator = 0;
int option;
int inputCount = 0;
bool continueInput = false;
bool num1alr = false;

void getUserInput() {
	printf("\n");
	scanf("%s", userInput);
	length = strlen(userInput);
	processUserInput();
}

void processUserInput() {
	for (int i = length; i >= 0; i--) {
		analyzer = userInput[i];
		if (isdigit(analyzer) || analyzer == '.' || analyzer == ',') {
			
		if (analyzer == '+') {
			operator = 1;
			break;
		} else if (analyzer == '-') {
			operator3 = 2;
			break;
		} else if (analyzer == '*') {
			operator = 3;
			break;
		} else if (analyzer == '/') {
			operator = 4;
			break;
		}
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
