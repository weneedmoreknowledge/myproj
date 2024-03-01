import sqlite3

def create_database():
    try:
        # Connect to or create a SQLite database
        conn = sqlite3.connect('example.db')

        # Create a cursor object to execute SQL commands
        cursor = conn.cursor()

        # Create a table
        cursor.execute('''CREATE TABLE IF NOT EXISTS users
                          (id INTEGER PRIMARY KEY,
                           Email TEXT NOT NULL,
                           passWord TEXT NOT NULL)''')

        # Committing changes and closing the connection
        conn.commit()
        conn.close()
        print("Database created successfully!")

    except sqlite3.Error as e:
        print("Error creating database:", e)

if __name__ == "__main__":
    create_database()
