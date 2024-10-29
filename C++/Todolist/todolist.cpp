#include <iostrem>

using namespace std;

int initChoice;

int main() {
	while(1){
		cout << "\n1. Add item\n2. Remove item\n3. Exit\n";
		cin >> initChoice;
		switch(initChoice) {
			case 1:
				break;
			case 2:
				break;
			case 3:
				return 0;
			default:
				cout << "\nInvalid Input\n";
				break;
		}
	}
	return 0;
}
