n = "Monday February 2, 8pm"
def shorten_to_date(long_date):
    return long_date.split(',')


res = shorten_to_date("Monday February 2, 8pm")
print(res)