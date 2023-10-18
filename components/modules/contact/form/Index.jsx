import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { variables } from '@/styles/Variables';
import { AnimatePresence, inView, motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import css from 'styled-jsx/css';
import { MediaQueries } from '@/styles/Utilities';
import { pXSmall, pSmall, pBase } from '@/styles/Type';
import axios from 'axios';

const Container = styled(motion.div)`
    width: 100%;
    position: relative;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    overflow: hidden;
    border-radius: 14px;

    &::after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        background-color: #000;
        border-radius: 14px;
        box-shadow:
            rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        z-index: -1;
        margin: 2px;
    }

    &::before {
        content: '';
        position: absolute;
        z-index: -2;
        left: -150%;
        top: -150%;
        width: 400%;
        height: 400%;
        opacity: ${(props) => (props.$playAnimation ? 1 : 0)};
        transition: opacity ease-out 3s;
        background-repeat: no-repeat;
        background-size:
            50% 50%,
            50% 50%;
        background-position:
            0 0,
            100% 0,
            100% 100%,
            0 100%;
        background-image: linear-gradient(#00d9ff, #00d9ff),
            linear-gradient(#00d9ff, #00d9ff);
        animation: rotate 5s linear infinite;
        filter: brightness(1.8);
    }

    @keyframes rotate {
        100% {
            transform: rotate(1turn);
        }
    }
`;

const MotionFormWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    min-height: ${(props) =>
        props.$heightOnSubmit ? props.$heightOnSubmit + 'px' : 'unset'};
`;

const MotionForm = styled(motion.form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding: 94px;
    position: relative;
    z-index: 1;
    width: 100%;

    @media ${MediaQueries.tablet} {
        padding: 44px;
    }

    @media ${MediaQueries.mobile} {
        padding: 34px;
    }
`;

const InputStyles = css`
    padding: 15px;
    background-color: unset;
    border-radius: 8px;
    border: 1px solid #00d9ff;
    width: 100%;
    ${pXSmall}
`;

const Input = styled.input`
    ${InputStyles}
`;

const TextArea = styled.textarea`
    ${InputStyles}
    resize: none;
    min-height: 180px;

    @media ${MediaQueries.mobile} {
        min-height: 140px;
    }
`;

const ErrorMessage = styled.span`
    ${pXSmall}
    color: #FF9494;
    align-self: flex-start;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    border: unset;
    background-color: #00d9ff;
    border-radius: 4px;
    cursor: pointer;
    transition: all ease-out 0.3s;
    margin-top: 8px;
    ${pXSmall}

    &:hover {
        background-color: ${variables.color2};
        scale: 1.1;
    }
`;

const PostSubmissionMessage = styled(motion.p)`
    ${pBase}
    padding: 48px;
    color: #fff;
    border-radius: 14px;
    overflow: hidden;
    position: relative;

    @media ${MediaQueries.mobile} {
        padding: 24px;
    }
`;

export default function Form({
    className,
    motionProps,
    successMessage,
    failedMessage,
}) {
    const [formSubmitStatus, setFormSubmitStatus] = useState(null);
    const [formHeight, setFormHeight] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        let form = document.getElementById('contact-form');
        setFormHeight(form.offsetHeight);

        axios
            .post('/api/submit-form', data)
            .then((response) => setFormSubmitStatus(response.status));
    };

    const formRef = useRef(null);
    const isInView = useInView(formRef, { amount: 1, once: false });
    const [formInView, setFormInView] = useState(false);

    useEffect(() => {
        if (isInView) {
            setFormInView(true);
        } else {
            setFormInView(false);
        }
    }, [isInView]);

    const FormViewSwitchMotionProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 1.8 },
    };

    return (
        <Container className={className} {...motionProps} ref={formRef}>
            <AnimatePresence mode='wait'>
                <MotionFormWrapper $heightOnSubmit={formHeight}>
                    <Background $playAnimation={formInView} />
                    {formSubmitStatus ? (
                        <PostSubmissionMessage {...FormViewSwitchMotionProps}>
                            {formSubmitStatus === 200
                                ? successMessage
                                : failedMessage}
                        </PostSubmissionMessage>
                    ) : (
                        <MotionForm
                            onSubmit={handleSubmit(onSubmit)}
                            {...FormViewSwitchMotionProps}
                            id='contact-form'
                        >
                            <Input placeholder='Name' {...register('name')} />
                            <Input
                                placeholder='Email Address*'
                                {...register('email', {
                                    required: true,
                                    pattern: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                                })}
                            />
                            {errors.email && (
                                <ErrorMessage>
                                    Please enter a valid email
                                </ErrorMessage>
                            )}
                            <TextArea
                                placeholder='Message*'
                                {...register('message', {
                                    required: true,
                                })}
                            />
                            {errors.message && (
                                <ErrorMessage>
                                    A message is required
                                </ErrorMessage>
                            )}
                            <SubmitButton disabled={false} type='submit'>
                                Submit
                            </SubmitButton>
                        </MotionForm>
                    )}
                </MotionFormWrapper>
            </AnimatePresence>
        </Container>
    );
}
