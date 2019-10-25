package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()
	// Dont worry about this line just yet, it will make sense in the Dockerise bit!
	r.Use(static.Serve("/", static.LocalFile("./web", true)))

	//Add a get endpoint
	//Add a post endpoint
	//Wrap them with an auth middleware that will redirect to google
	r.GET("/api/weights", func(c *gin.Context){
		c.JSON(200, gin.H{
			"weight": "", "date": "",
		})
	})
	r.Run()
}