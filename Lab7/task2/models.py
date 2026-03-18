class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"Сәлем, менің атым {self.name}. Жасым {self.age}-де."

    def get_role(self):
        return "Мектеп мүшесі"

    def __str__(self):
        return f"{self.name} ({self.age} жас)"


class Teacher(Person):
    def __init__(self, name, age, subject, experience):
        super().__init__(name, age)
        self.subject = subject
        self.experience = experience

    def get_role(self):
        return f"{self.subject} пәні мұғалімі"

    def teach(self):
        return f"{self.name} қазір {self.subject} сабағын түсіндіріп жатыр."


class Student(Person):
    def __init__(self, name, age, grade_level):
        super().__init__(name, age)
        self.grade_level = grade_level
        self.grades = []

    def get_role(self):
        return f"{self.grade_level}-сынып оқушысы"

    def add_grade(self, mark):
        self.grades.append(mark)
        return f"{mark} бағасы қойылды."

    def introduce(self):
        basic_intro = super().introduce()
        return f"{basic_intro} Мен {self.grade_level}-сыныпта оқимын."