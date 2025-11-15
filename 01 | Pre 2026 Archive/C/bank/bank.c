#include <stdio.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
#include <stdbool.h>

FILE *account;

int choice;
int passwdCount = 0;
char passwd[300];
char passwd2[300];
char accountName[16];
char accounts[][16] = { {}, {} };

int openPasswd() {
	while(1) {
		passwdCount = 0;
		printf("\nEnter a new password:\n");
		strcpy(passwd, "");
		strcpy(passwd2, "");
		scanf("%s", passwd);
		printf("\n\nConfirm password:\n");
		scanf("%s", passwd2);
		while(1) {
			if (passwd == passwd2) {
				return 0;
			} else if (passwdCount < 3) {
				printf("\n\nThe passwords don't match\nEnter the password again:\n");
				strcpy(passwd2, "");
				scanf("%s", passwd2);
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
}

int openAcc() {
	printf("\n\nEnter a account name (max. 16 characters):\n");
	scanf("%s", accountName);
	printf("\n\nEnter a password (at least 4 characters):\n");
	scanf("%s", passwd);
	if (strlen(passwd) < 4) {
		while(1) {
			if (strlen(passwd) < 4) {
				printf("\n\nThe password is too short\nEnter another password:\n");
				strcpy(passwd, "");
				scanf("%s", passwd);
			} else {
				return 0;
			}
		}
	}
	printf("\n\nConfirm password:\n");
	scanf("%s", passwd2);
	if (passwd != passwd2) {
		while (1) {
			if (passwd != passwd2 && passwdCount < 3) {
				printf("\n\nThe passwords don't match\nEnter the password again:\n");
				strcpy(passwd2, "");
				scanf("%s", passwd2);
				passwdCount++;
			} else if (passwd != passwd2 && passwdCount == 3) {
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

int manage() {
	while (1) {
		printf("\n\n\nChoose an option:\n1. Deposit\n2. Withdraw\n3. ");
	}
	return 0;
}

int login() {
	printf("\nThis is beeing worked on, enjoy your stay for now\n");
	manage();
	return 0;
}

int main() {
	printf("\nWelcome to the Bank manager\n\n\n");
	while (1) {
		printf("\nChoose an option:\n1. Manage account\n2. Open account\n3. Exit\n");
		scanf("%d", &choice);
		switch(choice) {
			case 1:	
				manage();
				break;
			case 2:
				openAcc();
				break;
			case 3:
				return 0;
			default:
				printf("\nInvalid option\n");
				break;
		}
	}
	return 0;
}
