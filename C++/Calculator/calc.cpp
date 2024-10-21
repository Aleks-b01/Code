#include <iostream>
#include <string>

using namespace std;

int option;
char temp;
int opIndex;
int intOperator;
double num1;
double num2;
double result;
int usrInLength;
string userInput;
string tempStr;

int calculate() {
	cin >> userInput;
	usrInLength = userInput.length() - 1;
	for (int i = usrInLength; i >= 0; i--) {
		temp = userInput.at(i);
		if (temp == '+') {
			intOperator = 1;
			opIndex = userInput.find('+');
			break;
		} else if (temp == '-') {
			intOperator = 2;
			opIndex = userInput.find('-');
			break;
		} else if (temp == '*') {
			intOperator = 3;
			opIndex = userInput.find('*');
			break;
		} else if (temp == '/') {
			intOperator = 4;
			opIndex = userInput.find('/');
			break;
		} else if (i == 0) {
			cout << "\n\nInvalid Input\n";
			return 0;
			break;
		} else {
			continue;
		}
	}
	tempStr.append(userInput, 0, opIndex - 1);
	num1 = stod (tempStr);
	tempStr.clear();
	tempStr.append(userInput, opIndex + 1, usrInLength);
	num2 = stod (tempStr);
	tempStr.clear();
	switch (intOperator) {
		case 1:
			result = num1 + num2;
			cout << "\n\n" << result << "\n";
			break;
		case 2:
			result = num1 - num2;
			cout << "\n\n" << result << "\n";
			break;
		case 3:
			result = num1 * num2;
			cout << "\n\n" << result << "\n";
			break;
		case 4:
			if (num2 == 0) {
				cout << "You can't divide by zero";
			} else {
				result = num1 / num2;
				cout << "\n\n" << result << "\n";
			}
			break;
	}
	return 0;
}

int main() {
	while(1) {
		cout << "\nSimple Calculator\n\n\n\nChoose an Option:\n1. Calculate\n2. Exit\n";
		cin >> option;
		switch(option) {
			case 1:
				calculate();
				break;
			case 2:
				return 0;
				break;
			default:
				cout << "\n\nInvalid Input\n";
				break;
		}
	}
	return 0;
}
