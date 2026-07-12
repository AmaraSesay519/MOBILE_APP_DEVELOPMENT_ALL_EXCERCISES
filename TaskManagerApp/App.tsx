// Import React and the useState hook.
import React, { useState } from 'react';

// useState lets a component "remember" data between renders (this is called "state").
import {View,Text,TextInput,TouchableOpacity,FlatList,StyleSheet,} from 'react-native';

// Define the "shape" of a single Task using a TypeScript type.
// This acts like a contract: every task object MUST have these three fields,
// with these exact data types. TypeScript will warn us if we break this contract.
type Task = {
  id: string;        // Unique identifier for the task (used to find/update/delete it).
  title: string;      // The actual text of the task, e.g. "Buy groceries".
  completed: boolean; // Whether the task has been marked as done (true) or not (false).
};
export default function App() {

  // State variable #1: holds the full list of tasks.
  // useState<Task[]>([]) means: "tasks" is an array of Task objects, starting empty.
  // setTasks is the ONLY correct way to update this list (never edit "tasks" directly).
  const [tasks, setTasks] = useState<Task[]>([]);

  // State variable #2: holds whatever text the user is currently typing into the input box.
  // useState<string>('') means it starts as an empty string.
  const [inputText, setInputText] = useState<string>('');

  // FUNCTION: Add a new task 
  // Runs when the user presses the "Add" button.
  const addTask = (): void => {
    // Guard clause: if the input is empty (or just spaces), do nothing.
    // .trim() removes whitespace from both ends before checking.
    if (inputText.trim() === '') return;

    // Build a new Task object matching our "Task" type defined above.
    const newTask: Task = {
      id: Date.now().toString(), // Uses the current timestamp (in ms) as a quick unique ID.
      title: inputText,          // The text currently typed in the input box.
      completed: false,          // New tasks always start as "not completed".
    };

    // Update state: create a NEW array containing all old tasks (...tasks)
    // plus the newly created task at the end.
    // We never modify "tasks" directly — we always give setTasks a fresh array.
    setTasks([...tasks, newTask]);

    // Clear the input box now that the task has been added.
    setInputText('');
  };

  // ---------- FUNCTION: Toggle a task's completed status ----------
  // Runs when the user taps on a task's text (marks it done, or undoes that).
  const toggleComplete = (id: string): void => {
    setTasks(
      // .map() loops through every task and returns a NEW array.
      tasks.map((task) =>
        // If this task's id matches the one that was tapped...
        task.id === id
          ? { ...task, completed: !task.completed } // ...copy it, but flip "completed".
          : task                                     // Otherwise, leave the task unchanged.
      )
    );
  };

  // ---------- FUNCTION: Delete a task ----------
  // Runs when the user taps the "Delete" button on a task row.
  const deleteTask = (id: string): void => {
    setTasks(
      // .filter() keeps only the tasks that pass the test inside.
      // Here: keep every task EXCEPT the one whose id matches the one being deleted.
      tasks.filter((task) => task.id !== id)
    );
  };

  //  UI screen) 
  return (
    <View style={styles.container}>

      {/* App title at the top of the screen */}
      <Text style={styles.header}>Welcome To My Daily Tasks Application</Text>

      {/* Row containing the text input and the "Add" button, side by side */}
      <View style={styles.inputRow}>

        {/* Text box for typing a new task */}
        <TextInput
          style={styles.input}
          placeholder="Enter a new task" 
          value={inputText}              // Always reflects the current "inputText" state.
          onChangeText={setInputText}    // Updates state on every keystroke.
        />

        {/* "Add" button — calls addTask() when pressed */}
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable list that displays every task in the "tasks" array */}
      <FlatList
        data={tasks} // The array of data to render.
        keyExtractor={(item) => item.id} // Tells React how to uniquely identify each row (for performance).
        renderItem={({ item }) => (
          // "item" here is a single Task object from the "tasks" array.

          // Row container: holds the task text on the left, delete button on the right.
          <View style={styles.taskRow}>

            {/* Tapping the task text toggles its completed status */}
            <TouchableOpacity
              style={styles.taskTextWrapper}
              onPress={() => toggleComplete(item.id)} // Arrow function so it only runs ON TAP, not immediately.
            >
              <Text
                style={[
                  styles.taskText,                          // Base style, always applied.
                  item.completed && styles.completedText,   // Extra style ONLY if completed is true.
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>

            {/* Tapping "Delete" removes this specific task */}
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

//STYLES 
// StyleSheet.create() is similar to CSS, but written as a JavaScript object.
const styles = StyleSheet.create({
  container: {
    flex: 1,           
    paddingTop: 60,      
    paddingHorizontal: 20, 
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'green',
    margin: 15,
    padding: 10,
    borderRadius: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    fontFamily: 'Arial',
    color: 'darkblue',
    textAlign: 'center',
  },
  
  inputRow: {
    flexDirection: 'row', 
    marginBottom: 20,
  },
  input: {
    flex: 1,             
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,     
  },
  addButton: {
    backgroundColor: '#2e86de', 
    borderRadius: 8,
    justifyContent: 'center',   
    paddingHorizontal: 15,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskRow: {
    flexDirection: 'row',       
    justifyContent: 'space-between', 
    alignItems: 'center',        
    padding: 12,
    borderBottomWidth: 1,        
    borderBottomColor: '#eee',
  },
  taskTextWrapper: {
    flex: 1, 
  },
  taskText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through', // Draws a strikethrough over the text.
    color: '#999',                      // Greys out the text to show it's done.
  },
  deleteText: {
    color: '#e74c3c',   // Red, to visually signal a destructive action.
    fontWeight: 'bold',
    marginLeft: 10,      // Small gap between task text and the Delete label.
  },
});
