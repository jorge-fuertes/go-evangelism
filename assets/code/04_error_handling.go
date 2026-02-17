// Ejemplo 4: Manejo de errores
package main

import (
	"fmt"
	"strconv"
)

func convertToInt(s string) (int, error) {
	return strconv.Atoi(s)
}

func main() {
	result, err := convertToInt("42")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println("Resultado:", result)
}
