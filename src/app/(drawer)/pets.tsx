import { StyleSheet, Text, View } from "react-native";
import { EntityListTable, TableRow } from "../../components/entityListTable";
import { globalStyles } from "../../globalStyles";

export default function Pets() {
  const columns = [
    { key: 'name', label: 'Nome' },
    { key: 'size', label: 'Porte' },
    { key: 'species', label: 'Espécie' },
    { key: 'furType', label: 'Tipo de Pelo' },
  ];

  const sampleData = [
    { id: 1, name: 'Golden Retriever', size: 'Grande', species: 'Cachorro', furType: 'Longo' },
    { id: 2, name: 'Siamês', size: 'Médio', species: 'Gato', furType: 'Curto' },
    { id: 3, name: 'Poodle', size: 'Pequeno', species: 'Cachorro', furType: 'Cacheado' },
    { id: 4, name: 'Persa', size: 'Médio', species: 'Gato', furType: 'Longo' },
    { id: 5, name: 'Labrador Retriever', size: 'Grande', species: 'Cachorro', furType: 'Curto' },
    { id: 6, name: 'Beagle', size: 'Médio', species: 'Cachorro', furType: 'Curto' },
    { id: 7, name: 'Maine Coon', size: 'Grande', species: 'Gato', furType: 'Longo' },
    { id: 8, name: 'Bulldog', size: 'Médio', species: 'Cachorro', furType: 'Curto' },
    { id: 9, name: 'Ragdoll', size: 'Grande', species: 'Gato', furType: 'Longo' },
    { id: 10, name: 'Chihuahua', size: 'Pequeno', species: 'Cachorro', furType: 'Curto' },
    { id: 11, name: 'Sphynx', size: 'Médio', species: 'Gato', furType: 'Sem Pelo' },
    { id: 12, name: 'Yorkshire Terrier', size: 'Pequeno', species: 'Cachorro', furType: 'Longo' },
  ];

  const handleEdit = (row: TableRow) => {
    console.log('Edit:', row);
    // TODO: Navigate to edit screen or open modal
  };

  const handleDelete = (row: TableRow) => {
    console.log('Delete:', row);
    // TODO: Show confirmation dialog and delete
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Raças de Pets</Text>
      <EntityListTable
        columns={columns}
        data={sampleData}
        onEdit={handleEdit}
        onDelete={handleDelete}
        itemsPerPage={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalStyles.gray1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
