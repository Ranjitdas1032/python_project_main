from django.db import models
from django.utils import timezone

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    stock_qty = models.IntegerField(default=0)

    def __str__(self):
        return self.name
    
class Sale(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE)  
    quantity_sold = models.IntegerField()
    sales_date = models.DateTimeField(default=timezone.now)

