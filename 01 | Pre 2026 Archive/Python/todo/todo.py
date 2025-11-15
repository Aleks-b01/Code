tasks = []

def addTasks():
	print("Enter a task:")
	task = str(input())
	tasks.append(task)

def viewTasks():
	if len(tasks) == 0:
		print("There is nothing to do")
	else:
		for x in tasks:
			print(x)
	
def removeTasks():
	if len(tasks) == 0:
		print("There are no tasks to remove")
	else:
		viewTasks()
		print("Which task to remove?")
		temptask = int(input()) - 1
		tasks.pop(temptask)

def displayMenu():
	print("1. Add task")
	print("2. Remove task")
	print("3. View tasks")
	print("4. Exit")
	print("Choose an option:")

while True:
	displayMenu()
	choice = int(input())
	if choice == 1:
		addTasks()
	elif choice == 2:
		removeTasks()
	elif choice == 3:
		viewTasks()
	elif choice == 4:
		break
	else:
		print("Invalid Input")
