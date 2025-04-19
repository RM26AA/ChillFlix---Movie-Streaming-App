import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  editButton: {
    padding: 10,
  },
  editText: {
    color: 'red',
    fontWeight: 'bold',
  },
  profilesContainer: {
    flexDirection: 'column',
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileBox: {
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 160,
    borderWidth: 2,
    borderColor: 'white',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    //borderColor: 'white',
    //borderWidth: 2,
  },
  profileLabel: {
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
  },
  addProfileBox: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    width: 120,
    height: 160,
  },
  addProfileText: {
    color: 'gray',
    marginTop: 10,
    fontWeight: 'bold',
  }
});

export default styles;
