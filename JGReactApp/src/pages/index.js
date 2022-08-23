import React ,{Component} from 'react';
import {connect} from 'dva';
import router from 'umi/router'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import styles from './index.css';

import HeaderContent from '../component/header/HeaderContent';

@connect(state => ({ TestModel: state.TestModel }))
@Form.create()
class TestPages extends Component{

   handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ',values);
        //负责登陆验证
        this.props.dispatch({
           type: 'TestModel/changeInfo',
           //这个payLoad是参数属性{payLoad}
           payLoad: {
               name: values.username,
               age: values.password
           }
        })
        //负责记录
        window.localStorage.setItem('username',values.username)
        window.localStorage.setItem('password',values.password)
        window.localStorage.setItem('remember',values.remember)
        //成功调整
        // router.push({pathname:'/MenuPages/MenuPage',query:{
        //    id: 1,
        //    school: '米花小学'
        // }})
        router.push({pathname:'/DashPages'})
      }
    });
   };

   componentDidMount(){
      const { setFieldsValue } = this.props.form;

      if(window.localStorage.getItem('username') )
        setFieldsValue({"username": window.localStorage.getItem('username')})

      if(window.localStorage.getItem('remember') == 'true')
        setFieldsValue({"password": window.localStorage.getItem('password')})
       
      setFieldsValue({"remember": window.localStorage.getItem('remember') == 'true' ? true : false})
    }

   render(){ 
      const { getFieldDecorator } = this.props.form;
      return (       
        <div>
          <HeaderContent />
        
          <div className={styles.loginDiv}> 
            <Form onSubmit={this.handleSubmit} className={styles.login_form}>
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"  
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(<Checkbox>Remember me</Checkbox>)}
                  <a className={styles.login_form_forgot} href="www.baidu.com">
                    Forgot password
                  </a>
                  <Button type="primary" htmlType="submit" className={styles.login_form_button}>
                    Log in
                  </Button>
                  <a href="www.baidu.com">
                    register now!
                  </a>
                </Form.Item>
            </Form>     
          </div>
        </div>
      );
   }
}
export default TestPages;