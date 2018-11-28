from fileProcessor import FileProcessor

if __name__ == '__main__':
    print("------------------WELCOME TO HORCRUXIFIER!!!-------------------\n")
    
    while True:
        print("---------------OPTIONS--------------")
        print("1. Choose a file to horcruxify\n"
              "2. Choose a horcruxes folder to decrypt\n"
               "3. Exit\n")
       
        print("Enter your choice ---- :  ")

        choice = int(input())
        
        if choice == 1:
            temp = FileProcessor()
        if choice == 3:
           break;


    
