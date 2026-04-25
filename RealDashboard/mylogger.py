import logging
import time

logging.basicConfig(filename="realdashboard.log",level=logging.INFO)

def logging_dataload(func):
    def wrapper(*args,**kwargs):
        start = time.time()
        logging.info(f"API Calling... {func.__name__}")
        result = func(*args,**kwargs)
        end = time.time() - start
        logging.info(f"the data of {func.__name__} , takes total time for loading is {end}")
        return result
    return wrapper