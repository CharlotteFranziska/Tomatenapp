import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true, // Markiere auch die Todo-Komponente als Standalone
  imports: [CommonModule, FormsModule], // Importiere notwendige Module
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: any[] = [];
  newTodo: string = '';
  editingTodo: any = null;
  selectedPriority: string = 'low';
  priorities: string[] = ['low', 'medium', 'high'];

  constructor(private zone: NgZone) {
    // Lade Todos beim Initialisieren der Komponente
    this.loadTodos();
  }

  // Methode hinzugefügt, um zu überprüfen, ob localStorage verfügbar ist
  private isLocalStorageAvailable(): boolean {
    try {
      return typeof localStorage !== 'undefined'; // Überprüft, ob localStorage definiert ist
    } catch {
      return false; // Gibt false zurück, wenn ein Fehler auftritt
    }
  }

  // Angepasste Methode: Laden der Todos aus localStorage
  loadTodos(): void {
    if (this.isLocalStorageAvailable()) { // Sicherstellen, dass localStorage verfügbar ist
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos); // Todos aus localStorage laden
      }
    }
  }

  // Angepasste Methode: Speichern der Todos in localStorage
  saveTodos(): void {
    if (this.isLocalStorageAvailable()) { // Sicherstellen, dass localStorage verfügbar ist
      this.zone.runOutsideAngular(() => {
        localStorage.setItem('todos', JSON.stringify(this.todos)); // Todos in localStorage speichern
      });
    }
  }

  // Hinzufügen eines neuen Todos
  addTodo(): void {
    if (this.newTodo.trim() === '') return; // Keine leeren Todos erlauben

    const newTodo = {
      id: Date.now(),
      text: this.newTodo.trim(),
      priority: this.selectedPriority, // Priorität des neuen Todos
    };

    this.todos.push(newTodo); // Neues Todo zur Liste hinzufügen
    this.saveTodos(); // Todos speichern
    this.newTodo = ''; // Eingabefeld leeren
  }

  // Bearbeiten eines Todos
  editTodo(todo: any): void {
    this.editingTodo = { ...todo }; // Das zu bearbeitende Todo kopieren
  }

  // Bestätigen der Bearbeitung eines Todos
  confirmEdit(): void {
    const index = this.todos.findIndex(todo => todo.id === this.editingTodo.id); // Index des Todos finden
    if (index !== -1) {
      this.todos[index] = this.editingTodo; // Das bearbeitete Todo aktualisieren
      this.saveTodos(); // Todos speichern
      this.editingTodo = null; // Bearbeitungsmodus verlassen
    }
  }

  // Löschen eines Todos
  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id); // Todo aus der Liste entfernen
    this.saveTodos(); // Todos speichern
  }
}
