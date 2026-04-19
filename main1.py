password = input()
password_length = len(password)

def counter(password):
    count_list=[]
    num_char=0
    u_alpha=0
    l_alpha=0
    special_char=0
    for i in range(0,len(password)):
        if password[i].islower():
            l_alpha=l_alpha+1
        elif password[i].isupper():
            u_alpha=u_alpha+1
        elif password[i].isdigit():
            num_char=num_char+1
        else:
            special_char=special_char+1
    count_list.append(num_char)
    count_list.append(u_alpha)
    count_list.append(l_alpha)
    count_list.append(special_char)
    return count_list


    

def each_ratio(password_length):
    l=[]

    if(password_length<8):
        return "your password is weak. Atleast your password should be 8 characters"

    else:

        if(password_length%4 == 0):
            each_value = password_length//4
            num_char=each_value
            u_alpha=each_value
            l_alpha=each_value
            special_char=each_value

            l.append(num_char)
            l.append(u_alpha)
            l.append(l_alpha)
            l.append(special_char)

        elif(password_length%4==1):
            each_value = password_length//4
            num_char=each_value
            u_alpha=each_value
            l_alpha=each_value
            special_char=each_value+1

            l.append(num_char)
            l.append(u_alpha)
            l.append(l_alpha)
            l.append(special_char)

        elif(password_length%4==2):
            each_value = password_length//4
            num_char=each_value
            u_alpha=each_value
            l_alpha=each_value+1
            special_char=each_value+1

            l.append(num_char)
            l.append(u_alpha)
            l.append(l_alpha)
            l.append(special_char)

        else:
            each_value = password_length//4
            num_char=each_value
            u_alpha=each_value+1
            l_alpha=each_value+1
            special_char=each_value+1

            l.append(num_char)
            l.append(u_alpha)
            l.append(l_alpha)
            l.append(special_char)
        return l
def checker(password,password_length):
    if password_length<8:
        return "your password is weak. Atleast your password should be 8 characters"
    else:
        best=each_ratio(password_length)
        calc=counter(password)
        c=0
        c1=0
        for i in range(0,len(best)):
            if calc[i]==0:
                c1=0
            else:
                if(best[i]==calc[i]):
                    c=c+1
        if(c==4):
            return "your password is best password"
        elif((c<4 and c>0) and c1==1):
            return "your password is good add any of digit,upper,lower or number you missed in your password "
        else:
            return "your password is may decoded please use digit,upper,lower or number you missed in your password "
            



print(each_ratio(password_length))
print(counter(password))

    
