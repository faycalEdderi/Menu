from django.db import models

class Menu(models.Model):

    name = models.CharField(
        max_length=120,
        blank = True,
        null = True
        )
    description = models.TextField(
        blank = True, 
        null= True
    )

    day_of_menu = models.ForeignKey(
        'Week',
        null = True,
        on_delete=models.CASCADE)

    

    def __str__(self):
        if self.name:
            return str(self.day_of_menu) + " : " + self.name
        else:
            return str(self.day_of_menu) + " : vide"

class Week(models.Model):

    DAYS_OF_WEEK= [
        ('Lundi', 'Lundi'),
        ('Mardi', 'Mardi'),
        ('Mercredi', 'Mercredi'),
        ('Jeudi', 'Jeudi'),
        ('Vendredi', 'Vendredi'),
        ('Samedi', 'Samedi'),
        ('Dimanche', 'Dimanche'),
    ]
    

    day = models.CharField(
        choices = DAYS_OF_WEEK,
        max_length = 10
    )


    def __str__(self):
        return self.day


