import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
  },
  addProfileBox: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  addProfileText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileModal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
    zIndex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  saveText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileIconContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileIcon: {
    backgroundColor: 'blue',
    padding: 30,
    borderRadius: 10,
    position: 'relative',
  },
  editButton: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  profileInput: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: 10,
    width: '100%',
  },
  toggleContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  toggleLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  profileDescription: {
    marginTop: 20,
    color: 'grey',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default styles;