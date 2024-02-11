import math
import turtle

t = turtle.Turtle()
screen = turtle.Screen()


for i in range(359):
    t.goto(-400,-400)
    t.speed(0)
    t.circle(i)
    t.circle(i+100)
    t.circle(i+200)
    t.circle(i+300)
    t.circle(i+400)
    



#     x = 100 * math.cos(i * math.pi / 180)
#     y = 100 * math.sin(i * math.pi / 180)
    
#     # Move to the current point
#     t.goto(x, y)
    
#     # Connect to the next point (with a wraparound for 360 degrees)
#     next_x = 100 * math.cos((i + 1) * math.pi / 180)
#     next_y = 100 * math.sin((i + 1) * math.pi / 180)
#     t.goto(next_x, next_y)

screen.exitonclick()