import os
import platform
import psutil

print("=" * 50)
print("COMPUTER INFORMATION")
print("=" * 50)

# Информация об операционной системе
print("\nOPERATING SYSTEM")
print("OS:", platform.system())
print("Version:", platform.version())
print("Architecture:", platform.machine())

# Информация о процессоре
print("\nPROCESSOR")
print("CPU:", platform.processor())
print("Physical cores:", psutil.cpu_count(logical=False))
print("Logical processors:", psutil.cpu_count(logical=True))

# Информация об оперативной памяти
memory = psutil.virtual_memory()
print("\nRAM")
print("Total:", round(memory.total / (1024**3), 2), "GB")
print("Used:", round(memory.used / (1024**3), 2), "GB")
print("Free:", round(memory.available / (1024**3), 2), "GB")

# Информация о дисках
print("\nSTORAGE DRIVES")
for partition in psutil.disk_partitions():
    try:
        usage = psutil.disk_usage(partition.mountpoint)
        print("Device:", partition.device)
        print("Mount point:", partition.mountpoint)
        print("Total size:", round(usage.total / (1024**3), 2), "GB")
        print("Free space:", round(usage.free / (1024**3), 2), "GB")
        print()
    except PermissionError:
        pass

print("=" * 50)


# Вторая часть — Моделирование архитектуры компьютера (ООП)
class CPU:

    def __init__(self, name, cores):
        self.name = name
        self.cores = cores

    def info(self):
        print(f"Processor: {self.name}")
        print(f"Cores count: {self.cores}")


class RAM:

    def __init__(self, size):
        self.size = size

    def info(self):
        print(f"RAM size: {self.size} GB")


class Storage:

    def __init__(self, device, size):
        self.device = device
        self.size = size

    def info(self):
        print(f"Storage type: {self.device}")
        print(f"Capacity: {self.size} GB")



class Computer:

    def __init__(self, cpu, ram, storage):
        self.cpu = cpu
        self.ram = ram
        self.storage = storage

    def show_info(self):
        print("\n=== COMPUTER ARCHITECTURE (OOP Model) ===")
        self.cpu.info()
        self.ram.info()
        self.storage.info()


cpu = CPU("Intel Core i5", 6)
ram = RAM(16)
storage = Storage("SSD", 512)

computer = Computer(cpu, ram, storage)
computer.show_info()