import java.util.ArrayList;
import java.util.Scanner;

public class ToDoList {
	private ArrayList<String> tasks;
	private Scanner scanner;
	private ArrayList<Integer> taskNumber;
	private ArrayList<Integer> taskEdit;
	private ArrayList<String> taskEditString;
	private ArrayList<String> tasksPlus;
	private ArrayList<Integer> tasksPlusInt;
	private ArrayList<Integer> changeTaskInt;
	private ArrayList<String> taskTemp;

	public ToDoList() {
		tasks = new ArrayList<>();
		scanner = new Scanner(System.in);
		taskNumber = new ArrayList<>();
		taskEdit = new ArrayList<>();
		taskEditString = new ArrayList<>();
		tasksPlus = new ArrayList<>();
		tasksPlusInt = new ArrayList<>();
		changeTaskInt = new ArrayList<>();
		taskTemp = new ArrayList<>();
	}

	public void run() {
		while(true) {
			printMenu();
			int choice = scanner.nextInt();
			scanner.nextLine();

			switch(choice) {
				case 1:
					addTask();
					break;
				case 2:
					removeTask();
					break;
				case 3:
					editTask();
					break;
				case 4:
					viewTasks();
					break;
				case 5:
					prioritize();
					break;
				case 6:
					System.out.println("Exiting...");
					return;
				default:
					System.out.println("Invalid Input");
			}
		}
	}

	private void printMenu() {
		System.out.println("\nTo Do List:");
		System.out.println("1. Add a task");
		System.out.println("2. Remove/Unprioritize a task");
		System.out.println("3. Edit Task");
		System.out.println("4. View Tasks");
		System.out.println("5. Prioritize Task");
		System.out.println("6. Exit");
		System.out.println(" ");
	}

	private void addTask() {
		System.out.println(" ");
		System.out.println("Enter a task");
		String task = scanner.nextLine();
		taskTemp.add(task);
		if (tasks.size() >= 1) {
			addTaskCheck();
		} else {
			tasks.add(taskTemp.get(0));
			taskTemp.clear();
			System.out.println("Done.");
		}
	}

	private void addTaskCheck() {
		System.out.println(" ");
		System.out.println("Do you want to prioritize this task?");
		System.out.println("1. Yes");
		System.out.println("2. No");
		int addtemp = scanner.nextInt();
		scanner.nextLine();
		if (addtemp == 1) {
			tasksPlus.add(taskTemp.get(0));
			taskTemp.clear();
			System.out.println("Done.");
		} else if (addtemp == 2) {
			tasks.add(taskTemp.get(0));
			taskTemp.clear();
			System.out.println("Done.");
		}
	}

	private void removeTask() {
		if (tasks.isEmpty() && tasksPlus.isEmpty()) {
			System.out.println(" ");
			System.out.println("Nothing to remove");
		} else {
			viewTasks();
			System.out.println(" ");
			System.out.println("Which task to remove/unprioritize? ");
			int taskNumberInt = scanner.nextInt();
			scanner.nextLine();
			taskNumber.add(taskNumberInt);
			unprioritizeCheck();
		}
	}

	private void changeTask() {
		if (changeTaskInt.get(0) == 1) {
			removeTaskFunction();
		} else if (changeTaskInt.get(0) == 2) {
			unprioritize();
		} else {
			System.out.println("Invalid Choice");
			changeTaskInt.clear();
			taskNumber.clear();
		}
	}

	private void unprioritizeCheck() {
		if (taskNumber.get(0) > 0 && taskNumber.get(0) <= tasksPlus.size()) {
			System.out.println(" ");
			System.out.println("Do you want to remove or unprioritize this task?");
			System.out.println("1. Remove");
			System.out.println("2. Unprioritize");
			int changeTaskIntTemp = scanner.nextInt();
			scanner.nextLine();
			changeTaskInt.add(changeTaskIntTemp);
			changeTask();
		} else if (taskNumber.get(0) > 0 && tasks.size() + tasksPlus.size() >= taskNumber.get(0)) {
			removeTaskFunction();
		} else {
			System.out.println(" ");
			System.out.println("Invalid number");
			taskNumber.clear();
		}
	}

	private void unprioritize() {
		if (taskNumber.get(0) > 0 && taskNumber.get(0) <= tasksPlus.size()) {
			String taskTemp = tasksPlus.get(taskNumber.get(0) - 1);
			tasksPlus.remove(taskNumber.get(0) - 1);
			tasks.add(taskTemp);
			taskNumber.clear();
			System.out.println("Done.");
			movePlus();
		} else {
			System.out.println("Invalid Number");
			taskNumber.clear();
			movePlus();
		}
	}

	private void removeTaskFunction() {
		if (taskNumber.get(0) > 0 && taskNumber.get(0) <= tasksPlus.size()) {
			tasksPlus.remove(taskNumber.get(0) - 1);
			taskNumber.clear();
			System.out.println("Done.");
			movePlus();
		} else if (taskNumber.get(0) > 0 && tasks.size() + tasksPlus.size() >= taskNumber.get(0)) {
			tasks.remove(taskNumber.get(0) - tasksPlus.size() - 1);
			taskNumber.clear();
			System.out.println("Done.");
			movePlus();
		} else {
			System.out.println("Invalid Number");
			taskNumber.clear();
			movePlus();
		}
	}

	private void editTask() {
		if (tasks.isEmpty()) {
			System.out.println(" ");
			System.out.println("Nothing to edit");
		} else {
			System.out.println(" ");
			viewTasks();
			System.out.println("Which task to edit?");
			int taskEditInt = scanner.nextInt();
			scanner.nextLine();
			taskEdit.add(taskEditInt);
			editTaskFunction();
		}
	}

	private void editTaskFunction() {
		if (taskEdit.get(0) > 0 && taskEdit.get(0) <= tasksPlus.size()) {
			System.out.println(" ");
			System.out.println("Edit task: ");
			String taskEditTemp = scanner.nextLine();
			taskEditString.add(taskEditTemp);
			int tempp = taskEdit.get(0) - 1;
			tasksPlus.set(tempp, taskEditString.get(0));
			taskEdit.clear();
			taskEditString.clear();
			System.out.println("Done.");
		} else if (taskEdit.get(0) > 0 && tasks.size() + tasksPlus.size() >= taskEdit.get(0)) {
			System.out.println(" ");
			System.out.println("Edit task: ");
			String taskEditTemp = scanner.nextLine();
			taskEditString.add(taskEditTemp);
			int temp = taskEdit.get(0) - tasksPlus.size() - 1;
			tasks.set(temp, taskEditString.get(0));
			taskEdit.clear();
			taskEditString.clear();
			System.out.println("Done.");
		} else {
			System.out.println("Invalid Number.");
			taskEditString.clear();
			taskEdit.clear();
		}
	}

	private void prioritize() {
		if (tasks.isEmpty()) {
			System.out.println(" ");
			System.out.println("No tasks");
		} else if (tasks.size() == 1) {
			System.out.println(" ");
			System.out.println("You can't prioritize a task while only having one task");
		} else {
			System.out.println(" ");
			viewTasksPlus();
			System.out.println(" ");
			System.out.println("Which task to prioritize?");
			int taskPlusTemp = scanner.nextInt();
			scanner.nextLine();
			tasksPlusInt.add(taskPlusTemp);
			prioritizeFunction();
		}
	}

	private void movePlus() {
		if (tasks.isEmpty() && tasksPlus.size() >= 1) {
			for (int i = 0; tasksPlus.size() > i; i = 0) {
				String taskMoveTemp = tasksPlus.get(0);
				tasksPlus.remove(0);
				tasks.add(taskMoveTemp);
			}
		}
	}

	private void prioritizeFunction() {
		if (tasksPlusInt.get(0) > 0 && tasksPlusInt.get(0) <= tasks.size()) {
			int tasksPlusDec = tasksPlusInt.get(0) - 1;
			String tasksPlusTempS = tasks.get(tasksPlusDec);
			tasksPlus.add(tasksPlusTempS);
			tasks.remove(tasksPlusInt.get(0) - 1);
			tasksPlusInt.clear();
		} else {
			System.out.println("Invalid choice");
			tasksPlusInt.clear();
		}
	}

	private void viewTasksPlus() {
		System.out.println(" ");
		System.out.println("Tasks: ");
		for (int i = 0; i < tasks.size(); i++) {
			System.out.println(tasks.get(i));
		}
	}

	private void viewTasks() {
		if (tasks.isEmpty()) {
			System.out.println(" ");
			System.out.println("Nothing to do.");
		} else {
			prioritizeView();
		}
	}

	private void prioritizeView() {
		if (tasksPlus.isEmpty() && tasks.size() >= 1) {
			System.out.println(" ");
			System.out.println("Tasks: ");
			for (int i = 0; i < tasks.size(); i++) {
				System.out.println(tasks.get(i));
			}
		} else {
			System.out.println(" ");
			System.out.println("Prioritized Tasks: ");
			for (int x = 0; x < tasksPlus.size(); x++) {
				System.out.println(tasksPlus.get(x));
			}
			System.out.println(" ");
			System.out.println("Tasks: ");
			for (int i = 0; i < tasks.size(); i++) {
				System.out.println(tasks.get(i));
			}
		}
	}
}
