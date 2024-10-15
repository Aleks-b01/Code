#include <iostream>

using namespace std;

int choice;
double num1;
double num2;
double result;
int operatorNum;

int calculate() {
	cin >> num1;
	cin >> operatorNum;
	cin >> num2;
	if (operatorNum == 1) {
		result = num1 + num2;
		cout << "\n\n" << result;
	} else if (operatorNum == 2) {
		result = num1 - num2;
		cout << "\n\n" << result;
	} else if (operatorNum == 3) {
		result = num1 * num2;
		cout << "\n\n" << result;
	} else if (operatorNum == 4) {
		if (num2 == 0) {
			cout << "\n\nYou can't divide by zero";
		} else {
			result = num1 / num2;
			cout << "\n\n" << result;
		}
	} else {
		cout << "\n\nPlease enter valid inputs";
	}
	return 0;
}

int main() {
	while (1) {
		cout << "\nSimple Calculator\n\n\n\nChoose an Option:\n\n1. Calculate\n2. Exit\n";
		cin >> choice;
		switch (choice) {
			case 1:
				calculate();
				break;
			case 2:
				return 0;
				break;
			default:
				cout << "\n\nYou need to select a valid option\n";
				break;
		}
	}
	return 0;
}
