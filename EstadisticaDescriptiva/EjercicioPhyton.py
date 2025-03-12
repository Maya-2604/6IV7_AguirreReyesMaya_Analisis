import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns


df = pd.read_csv("housing.csv")


col = 'median_house_value'


media = df[col].mean()
mediana = df[col].median()
moda = df[col].mode()[0]
rango = df[col].max() - df[col].min()
varianza = df[col].var()
desviacion = df[col].std()


tabla_estadisticas = pd.DataFrame({
    "Métrica": ["Media", "Mediana", "Moda", "Rango", "Varianza", "Desviación Estándar"],
    "Valor": [media, mediana, moda, rango, varianza, desviacion]
})

print("\nTabla de Estadísticas:")
print(tabla_estadisticas)


intervalos = np.histogram_bin_edges(df[col], bins='auto')
df["Intervalos"] = pd.cut(df[col], bins=intervalos, include_lowest=True)
tabla_frecuencia = df["Intervalos"].value_counts().sort_index().reset_index()
tabla_frecuencia.columns = ["Intervalo", "Frecuencia"]

print("\nTabla de Frecuencias:")
print(tabla_frecuencia)


plt.figure(figsize=(10, 5))
sns.barplot(x=df["median_house_value"][:50], y=df["population"][:50], palette="Blues")
plt.xticks(rotation=90)
plt.title("Comparación de Median House Value con Population")
plt.xlabel("Median House Value")
plt.ylabel("Population")
plt.show()


avg_value = df["median_house_value"].mean()
df_sorted = df.sort_values("median_house_value").head(50)

plt.figure(figsize=(10, 5))
sns.barplot(x=df_sorted["median_house_value"], y=df_sorted.index, palette="Reds")
plt.axvline(avg_value, color='black', linestyle='dashed', label=f'Promedio: {avg_value:.2f}')
plt.legend()
plt.xticks(rotation=90)
plt.title("Median House Value en relación con el promedio")
plt.xlabel("Median House Value")
plt.ylabel("Registros")
plt.show()
