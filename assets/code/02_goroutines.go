// Ejemplo 2: Goroutines - Concurrencia
package main

import (
	"fmt"
	"time"
)

func printNumbers() {
	for i := 1; i <= 5; i++ {
		fmt.Println(i)
		time.Sleep(100 * time.Millisecond)
	}
}

func main() {
	// Ejecutar concurrentemente
	go printNumbers()
	go printNumbers()

	time.Sleep(2 * time.Second)
}
