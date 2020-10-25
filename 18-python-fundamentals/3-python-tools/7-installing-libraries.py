from colorsys import rgb_to_hls
import calendar
import webbrowser
import turtle

color('red', 'yellow')
begin_fill()
while True:
    forward(200)
    left(170)
    if abs(pos()) < 1:
        break
end_fill()
done()

colors = ['red', 'purple', 'blue', 'green', 'orange', 'yellow']
t = turtle.Pen()
turtle.bgcolor('black')
for x in range(360):
    t.pencolor(colors[x % 6])
    t.width(x/100 + 1)
    t.forward(x)
    t.left(59)

print(rgb_to_hls(255, 0, 30))
cal = calendar.TextCalendar()

print(cal.prmonth(2025, 4))
print(calendar.HTMLCalendar().formatmonth(2020, 3))

url = 'http://docs.python.org'
webbrowser.open_new_tab(url)