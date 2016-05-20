import React from 'react'
import { Select, Option } from 'c/Select2'
import Pre from '../Pre'
import { Props, Prop } from '../Props'

const SelectDemo = React.createClass({
  render() {
    return (
      <Select defaultValue="1">
        <Option>请选择</Option>
        <Option value="0">苹果</Option>
        <Option value="1">三星</Option>
        <Option value="2">小米</Option>
      </Select>
    )
  }
})

const code = `import { Select, Option } from 'bfd-ui/lib/Select2'

const SelectDemo = React.createClass({
  render() {
    return (
      <Select defaultValue="1">
        <Option>请选择</Option>
        <Option value="0">苹果</Option>
        <Option value="1">三星</Option>
        <Option value="2">小米</Option>
      </Select>
    )
  }
})`

export default () => {
  return (
    <div>
      <h1>选择列表</h1>
      <Pre>{code}</Pre>
      <SelectDemo />
      <h2>Select</h2>
      <Props>
        <Prop name="value" type="string | number">
          <p>选中的值</p>
        </Prop>
        <Prop name="defaultValue" type="string | number">
          <p>选中的值</p>
        </Prop>
        <Prop name="onChange" type="function">
          <p>切换选择后的回调，参数为选中的值</p>
        </Prop>
      </Props>
      <h2>Option</h2>
      <Props>
        <Prop name="value" type="string | number">
          <p>值</p>
        </Prop>
      </Props>
    </div>
  )
}