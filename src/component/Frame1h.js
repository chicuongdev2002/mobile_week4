import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import image from "../image/book.png"

export default function Frame1h() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={image} style={styles.image} />
        <View style={styles.containerContent}>
          <Text style={styles.styleText}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.styleText}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.stylePrice}>141.800 đ</Text>
          <Text style={styles.stylePrice2}>141.800 đ</Text>
          <View style={styles.containerButtonAddNumber}>
            <Pressable>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <rect width="14.2222" height="16" fill="#C4C4C4" />
                <rect x="3" y="9.18164" width="2.18182" height="8" transform="rotate(-90 3 9.18164)" fill="#808080" />
              </svg>
            </Pressable>
            <Text>1</Text>
            <Pressable>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <rect width="14.2222" height="16" fill="#C4C4C4" />
                <rect x="3" y="9.09082" width="2.18182" height="8" transform="rotate(-90 3 9.09082)" fill="#011627" />
                <rect x="5.90906" y="4" width="2.18182" height="8" fill="#011627" />
              </svg>
            </Pressable>
            <Pressable>
              <Text style={styles.styleText2}>Mua sau</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.styleText3}>Mã giảm giá đã lưu</Text>
        <Text style={styles.styleText2}>Xem tại đây</Text>
      </View>
      <View style={styles.styleContent}>
        <View style={styles.contentLeft}>
          <View style={styles.yellowBlock}></View>
          <Text style={styles.styleText}>Mã giảm giá</Text>
        </View>
        <View style={styles.contentRight}>
          <Pressable style={styles.buttonAdd}>
            <Text style={styles.styleTextApDung}>Áp dụng</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.contentBody}>
        <View style={styles.containerNhapTaiDay}>
        <Text style={styles.styleText4}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
<Text style={styles.styleText2}>Nhập tại đây</Text>
      </View>
      <View style={styles.containerTamTinh}>
        <Text style={styles.styleText}>Tạm tính</Text>
        <Text style={styles.stylePrice}>141.800 đ</Text>
      </View>
        </View>
<View style={styles.containerThanhTien}>
    <Text style={styles.styleText5}>Thành tiền</Text>
    <Text style={styles.stylePrice}>141.800 đ</Text>
</View>
<View style={styles.containerFooter}>
    <Pressable>
        <Text style={styles.styleTextBuy}>TIẾN HÀNH ĐẶT HÀNG</Text>
    </Pressable>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 104,
    height: 127,
    flexShrink: 0,
  },
  styleText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  styleText2: {
    color: '#134FEC',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  stylePrice: {
    color: '#EE0D0D',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  stylePrice2: {
    color: '#808080',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'Roboto',
    textDecorationLine: 'line-through',
  },
  containerButtonAddNumber: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 16,
    flexShrink: 0,
  },
  styleTextBuy: {
    color: '#134FEC',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  styleContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'space-between',
    // width: 208,
    // height: 45,
    backgroundColor: 'transparent',
    flexShrink: 0,
    // borderRadius: 2,
    // borderWidth: 1,
    // borderColor: '#808080',
    marginTop: 50,

  },
  yellowBlock: {
    width: 32,
    height: 16,
    backgroundColor: '#F2DD1B',
    flexShrink: 0,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  styleText3: {
    color: '#011627',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  styleText4: {
    color: '#134FEC',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width:183,
    height:45,
    flexShrink: 0,
    borderRadius: 2,
    border: '1px solid #808080',
  },
  contentRight: {
    marginLeft: 20,
  },
  buttonAdd: {
    width: 99,
    height: 45,
    backgroundColor: '#0A5EB7',
    flexShrink: 0,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#134FEC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBody:{
    backgroundColor: '#BBBBBB',
    marginTop: 30,
  },
  styleText4:{
    color: '#011627',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 'normal',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  styleText5:{
    color: '#808080',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 'normal',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  containerNhapTaiDay:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 51,
    backgroundColor: '#FFFFFF',
flexShrink: 0,
marginTop:10,
  marginBottom:10,
  },
  containerTamTinh:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 360,
    height: 51,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    marginTop:10,
  marginBottom:90,
  },
  styleTextBuy:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 'normal',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  containerThanhTien:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 390,
    height: 51,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
  },
//   styleTextBuy:{
//     color: '#FFFFFF',
//     fontSize: 20,
//     fontWeight: 'normal',
//     lineHeight: '700',
//     textAlign: 'center',
//     fontStyle: 'normal',
//     fontFamily: 'Roboto',
//   },
  containerFooter:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 331,
    height: 45,
    flexShrink: 0,
    borderRadius: 2,
    backgroundColor: '#E53935',
  },
  styleTextApDung:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 'normal',
    textAlign: 'center',
    fontFamily: 'Roboto',
  }
});
