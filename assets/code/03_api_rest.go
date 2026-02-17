// Ejemplo 3: API REST simple
package main

import (
	"encoding/json"
	"net/http"
)

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

func getUsers(w http.ResponseWriter, r *http.Request) {
	users := []User{
		{ID: 1, Name: "Alice"},
		{ID: 2, Name: "Bob"},
	}
	json.NewEncoder(w).Encode(users)
}

func main() {
	http.HandleFunc("/api/users", getUsers)
	http.ListenAndServe(":8080", nil)
}
