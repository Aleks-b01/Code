#include <stdio.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
#include <stdbool.h>

FILE *account;

char accountName[16];
char accounts[][16];

int openAcc() {
	pritnf("\nEnter a account name (max. 16 characters):");
	scanf("\n%s\n", accountName);
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
