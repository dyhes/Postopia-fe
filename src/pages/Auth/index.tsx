import authBg from '@/assets/auth-bg.svg';
import AuthService from '@/services/auth';
import { Button, Form, FormProps, Input, Spin } from 'antd';
import classNames from 'classnames';
import { useCallback, useMemo, useState } from 'react';
import styles from './index.less';

const { signup, login } = AuthService;

type FiledType = {
  username?: string;
  password?: string;
};

const AuthPage: React.FC = () => {
  const [subject, setSubject] = useState('login');
  const [loading, setLoading] = useState(false);
  const stateMap: Record<string, any> = useMemo(
    () => ({
      login: {
        content: '登录',
        hint: '没有账号?',
        link: '注册',
        onLinkClick: () => {
          setSubject('signup');
        },
        onSubmit: signup,
      },
      signup: {
        content: '注册',
        hint: '已有账号?',
        link: '登录',
        onLinkClick: () => {
          setSubject('login');
        },
        onSubmit: login,
      },
    }),
    [setSubject],
  );

  const state = useMemo(() => stateMap[subject], [subject]);

  const onFinish: FormProps<FiledType>['onFinish'] = useCallback(
    async (values: FiledType) => {
      setLoading(true);
      console.log('values', values);
      try {
        const res = await state.onSubmit(values);
        console.log('hre');
        if (subject === 'login') {
          console.log('res', res);
        }
      } catch {
        console.log('error');
      } finally {
        setLoading(false);
      }
    },
    [setLoading, state, subject],
  );

  return (
    <div className="w-screen h-full flex items-center justify-center relative">
      <img
        src={authBg}
        className="w-screen h-full absolute -z-10 object-cover"
      />
      {loading ? (
        <Spin spinning={loading} size="large" />
      ) : (
        <div className={classNames('w-[528px] bg-white', styles.container)}>
          <div className="w-full px-[80px] py-[24px]">
            <h1 className="text-2xl mt-8 mb-xs font-bold text-neutral-content-strong mb-2">
              {state.content}
            </h1>
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              onFinish={onFinish}
            >
              <Form.Item<FiledType>
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item<FiledType>
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password />
              </Form.Item>
              <p className="mb-1 ml-2">
                {state.hint}{' '}
                <a onClick={state.onLinkClick} className="underline">
                  {state.link}
                </a>
              </p>
              <Form.Item
                wrapperCol={{ span: 24 }}
                className="flex justify-center"
              >
                <Button type="primary" htmlType="submit" className="w-[120px]">
                  {state.content}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
