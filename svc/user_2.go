package main

import (
	"log"
	"net/http"
	"strings"
)

func sendUser2(email string, firstName string, phoneNumber string) {
	log.Println("user", email)
	http.Post("https://api.segment.io/v1/track", "application/json", strings.NewReader(email+firstName+phoneNumber))
}
