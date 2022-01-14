import styled from '@emotion/styled';

export const FormElement = styled.form`
  width: 100%;
  height: calc(100% - 60px);
  overflow: hidden;
`;

export const FormInnerElement = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const LabelElement = styled.label`
  font-size: 16px;
  line-height: 20px;
  display: block;
  margin-bottom: 10px;
`;

export const SelectElement = styled.select`
  width: 100%;
  background-color: #fff;
  color: #000;
  display: block;
  padding: 10px 15px;
  border-radius: 2px;
  margin-bottom: 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
`;

export const InputElement = styled.input`
  width: 100%;
  background-color: #fff;
  color: #000;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 2px;
  margin-bottom: 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
`;

export const CheckboxElement = styled.input`
  display: block;
`;
