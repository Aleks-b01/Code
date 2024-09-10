while True:

	num1temp = str(input("Enter a number or x to exit: "))
	if num1temp == 'x':
		break
	else:
		num1 = float(num1temp)
	num2 = float(input("Enter another number: "))
	
	print("1. Addition")
	print("2. Subtraction")
	print("3. Multiplication")
	print("4. Division")
	choice = int(input("Choose the operation: "))
	
	if choice == 1:
		result = num1 + num2
		print(result)
	elif choice == 2:
		result = num1 - num2
		print(result)
	elif choice == 3:
		result = num1 * num2
		print(result)
	elif choice == 4:
		if num2 != 0:
			result = num1 / num2
			print(result)
		else:
			print("Dumbass lol")
