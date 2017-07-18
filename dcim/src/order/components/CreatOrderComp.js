/**
 * Created by Administrator on 2017-06-16.
 */
import { Form, Input, Cascader, Button } from 'antd';
import React from 'react';

const FormItem = Form.Item;
const prioritys = [
  {
    value: 'High',
    label: 'High',
  },
  {
    value: 'Normal',
    label: 'Normal',
  },
  {
    value: 'Low',
    label: 'Low',
  },
]
const residences = [{
  value: '基础设施',
  label: '基础设施',
  children: [{
    value: '空调不运行',
    label: '空调不运行',
  }],
}, {
  value: 'IT设施',
  label: 'IT设施',
  children: [{
    value: '服务器硬件故障',
    label: '服务器硬件故障',
  }],
}];

class CreateOrderComp extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { onOk } = this.props;
        onOk(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="工单标题"
          hasFeedback
        >
          {getFieldDecorator('title', {
            rules: [{
              required: true, message: 'Please input title!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="故障类型"
        >
          {getFieldDecorator('type', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
          })(
            <Cascader options={residences} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="优先级"
          hasFeedback
        >
          {getFieldDecorator('priority', {
            initialValue: ['High'],
            rules: [{ type: 'array', required: true, message: 'Please select your priority!' }],
          })(
            <Cascader options={prioritys} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="创建人"
          hasFeedback
        >
          {getFieldDecorator('creator', {
            rules: [{
              required: true, message: 'Please input title!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="创建时间"
          hasFeedback
        >
          {getFieldDecorator('createDate', {
            rules: [{
              required: true, message: 'Please input title!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Register</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedCreateOrderComp = Form.create()(CreateOrderComp);
export default WrappedCreateOrderComp;
/** ReactDOM.render(<WrappedRegistrationForm />, mountNode); **/
