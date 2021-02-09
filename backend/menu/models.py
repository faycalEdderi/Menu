from django.db import models

class Menu(models.Model):

    name = models.CharField(max_length=120)
    description = models.TextField()

    day_of_menu = models.ForeignKey(
        'Week',
        null = True,
        on_delete=models.CASCADE)

    

    def __str__(self):
        return self.name

class Week(models.Model):

    DAYS_OF_WEEK= [
        ('Lun', 'Lundi'),
        ('Mar', 'Mardi'),
        ('Mer', 'Mercredi'),
        ('Jeu', 'Jeudi'),
        ('Ven', 'Vendredi'),
        ('Sam', 'Samedi'),
        ('Dim', 'Dimanche'),
    ]

    day = models.CharField(
        choices = DAYS_OF_WEEK,
        max_length = 3
    )


    def __str__(self):
        return self.day


