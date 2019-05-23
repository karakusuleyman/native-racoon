
import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Image, Alert, View, Picker, ImageBackground, Dimensions } from 'react-native';
import { Header, Button, Spinner, CardSection, Card, Input, Background } from './common';
import axios from 'axios';




export default class TakeInfo extends Component {
  state = { maxalan: '', minalan: '', minkira: '', maxkira: '', yer: '', error: '', loading: false, stores: [] ,deneme :''};

  static navigationOptions = {
    header: null

  }

  buttonClickListener = () => {
    const { minalan, minkira, maxalan, maxkira, yer, stores ,deneme} = this.state;
    const { navigate } = this.props.navigation;
    const alfa = { maxkira, minkira, maxalan, minalan, yer };
    
     /* let array = [{
      url: 'https://www.sahibinden.com/ilan/emlak-isyeri-kiralik-alp-emlaktan-akincilarda-cadde-uzeri-kiralik-isyeri-3.500-tl-682468019/detay',
      name: 'alp emlaktan kiralık dükkan'
    }, {
      url: 'https://www.google.com/search?ei=TunjXMbhB8newQL9-7_oDQ&q=how+to+pass+data+in+stacknavigator+react-native&oq=how+to+pass+data+in+stacknavigator+react-native&gs_l=psy-ab.3..33i21.25315.37388..37488...0.0..0.307.5001.6j31j1j1......0....1..gws-wiz.......0i71j35i39j0i131j0j0i203j0i22i30j33i22i29i30j33i160.wM5DIelrPvg',
      name: 'Bugün hava çok güzel'
    }]  */


    if (minalan == '' || minkira == '' || maxalan == '' || maxkira == '') {
      Alert.alert('Alanlar boş bırakılamaz')
    }
    else if (isNaN(maxalan) || isNaN(maxkira) || isNaN(minalan) || isNaN(minkira)) {
      Alert.alert('Harf giremessin')
    }

    else {
      // await this.getCoordinates(maxalan,minalan,maxkira,minkira,yer);
      
        const array = []
        axios.get(
        "https://calm-garden-42324.herokuapp.com/predict",{
            params: {
               maxSize:maxalan,
               minSize:minalan,
               minRent:minkira,
               maxRent:maxkira,
               district:yer
            }
        }).then(response => {
            
            response.data.url.forEach(element => {
              const name = element.substring(27,element.length-16).replace(/-/g," ").toUpperCase()
              const obj = {
                url:element,
                name:name
              }
              console.log(obj)
              array.push(obj)

            });
            navigate('resultPage', array)
        }) 
        
      // let dizi=this.search();
     // this.setState({deneme : stores[1]});
      
    
  }


  };


  search = () => {
    const { minalan, minkira, maxalan, maxkira, yer } = this.state;

    return (
      axios.get(url)
        .then(response => this.setState({ stores: response.data })));
  }



  //search fonksiyonunu cağırarak dükkanların olduğu json dosyasını bekleyecek.Gelince pars edecek.
  async getStore(query) {
    this.setState({
      loading: true
    });

    let coords = await this.search(query);



  }
 

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <Button onPress={this.buttonClickListener.bind(this)}>
        ARA
      </Button>
    );
  }

  mainpage = () => {

    return (
      <View>

        <ScrollView style={styles.scrollview}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 180, height: 225 }}
              source={require('./logo4.png'

              )}></Image>
          </View>

          <Card>
            <CardSection>

              <Input

                placeholder="min"
                label="Kira"
                value={this.state.minkira}
                onChangeText={minkira => this.setState({ minkira })}
                placeholder1='max'
                value1={this.state.maxkira}
                onChangeText1={maxkira => this.setState({ maxkira })}

              />


            </CardSection>

            <CardSection>
              <Input
                //   secureTextEntry
                placeholder="min"
                label="m²"
                value={this.state.minalan}
                onChangeText={minalan => this.setState({ minalan })}
                placeholder1="max"
                value1={this.state.maxalan}
                onChangeText1={maxalan => this.setState({ maxalan })}

              />
            </CardSection>


            <CardSection>
              <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>Yer</Text>
                <Picker
                  selectedValue={this.state.yer}
                  style={styles.pickerStyle}
                  itemStyle={styles.itemStyle}
                  onValueChange={yer =>
                    this.setState({ yer })
                  }>
                  <Picker.Item label="Buca" value="buca" />
                  <Picker.Item label="Bornova" value="bornova" />
                  <Picker.Item label="Konak" value="konak" />
                </Picker>
              </View>



            </CardSection>

            <CardSection>
              {/* <Button
                onPress={this.buttonClickListener}
              >

                GİRR
      </Button> */}
              {this.renderButton()}
            </CardSection>

         


          </Card>
        </ScrollView>

        {/*  <Background  sourceBackground={require('./photo4.jpg')}  />  */}
      </View>

    )
  };

  render() {

    return (
      <View>

        {this.mainpage()}

      </View>

    );

  }
}


const styles = {

  textStyle: {
    paddingLeft: 20,
    flex: 1,
    fontSize: 25,
    color: 'black'
  },
  pickerStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 20,
    flex: 2
  },
  containerStyle: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemStyle: {
    fontSize: 25
  },
  containter: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height //for full screen
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  scrollview: {
    //backgroundColor: 'transparent',
    marginTop: 10,
    backgroundColor: '#fff'
    // backgroundColor:'rgba(47,163,218,0.4)'
  }

};