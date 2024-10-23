#include <stdio.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
#include <stdbool.h>

FILE *account;

int passwdCount = 0;
char passwd[];
char passwd2[];
char accountName[16];
char accounts[][16];

int openPasswd() {
	while(1) {
		passwdCount = 0;
		printf("\nEnter a new password:");
		passwd.clear();
		passwd2.clear();
		scanf("\n%s\n", passwd);
		printf("\nConfirm password:");
		scanf("\n%s\n", passwd2);
		while(1) {
			if (passwd == passwd2) {
				return 0;
			} else if (passwdCount < 3) {
				printf("\nThe passwords don't match\nEnter the password again:");
				passwd2.clear();
				scanf("\n%s\n", passwd2);
				passwdCount++;
			} else {
				passwdCount = 0;
				return 0;
		}
		if (passwd == passwd2) {
			return 0;
		}
	}
	passwdCount = 0;
	return 0;
}

int openAcc() {
	pritnf("\nEnter a account name (max. 16 characters):");
	scanf("\n%s\n", accountName);
	printf("\nEnter a password (at least 4 characters):");
	scanf("\n%s\n", passwd);
	if (passwd.length() < 4) {
		while(1) {
			if (passwd.length() < 4) {
				printf("\nThe password is too short\nEnter another password:");
				passwd.clear();
				scanf("\n%s\n", passwd);
			} else {
				return 0;
			}
		}
	}
	printf("\nConfirm password:");
	scanf("\n%s\n", passwd2);
	if (passwd != passwd2) {
		while (1) {
			if (passwd != passwd2 && count < 3) {
				printf("\nThe passwords don't match\nEnter the password again:");
				passwd2.clear();
				scanf("\n%s\n", passwd2);
				count++;
			} else if (passwd != passwd2 && count == 3) {
				int openPasswd();
				return 0;
			} else {
				return 0;
			}
		}
	}
	printf("\nAll set, Your account is ready to go!\n");
	passwdCount = 0;
	return 0;
}

int main() {
	while (1) {
		printf("\nWelcome to the Bank manager\n\n\n\nChoose an option:\n1. Manage account\n2. Open account\n3. Close account\n4. Exit\n");
		int choice;
		scanf("\n%d\n", choice);
		switch(choice) {
			case 1:			
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				return 0;
		}
	}
	return 0;
}
