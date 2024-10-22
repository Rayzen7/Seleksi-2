import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setMessage('Format email tidak valid');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('https://seleksi2-api.vercel.app/api/login', {
                email,
                password,
            });

            setMessage(response.data.message);

            if (response.status === 200) {
                navigate('/success');
                alert('Selamat Jawaban Anda Benar');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setMessage(error.response.data.message);
            } else if (error.request) {
                setMessage('Tidak ada respon dari server');
            } else {
                setMessage('Terjadi kesalahan');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex font-poppins items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/wallpaper.png)' }}>
            <form className="flex gap-7 flex-col items-center justify-center bg-black bg-opacity-60 px-8 py-10 rounded-lg lg:w-full w-[330px] max-w-md space-y-6" onSubmit={handleSubmit}>
                <div className='text-center'>
                    <h1 className="text-white text-[35px] font-[600]">Masuk</h1>
                    <p className="text-white text-sm text-center py-3">Silahkan memasukkan email dan kata sandi yang benar</p>
                </div>
                <div className="flex flex-col space-y-4 w-full">
                    <input 
                        type="email" 
                        className="px-4 py-3 w-full rounded-md text-[12px] focus:outline-none focus:ring-2 focus:ring-red-500" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        className="px-4 py-3 w-full rounded-md text-[12px] focus:outline-none focus:ring-2 focus:ring-red-500" 
                        placeholder="Kata Sandi" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={loading} 
                    className={`px-6 py-2 bg-red-600 border-none outline-none text-white rounded-full font-[600] ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700 transition-all'}`}
                >
                    {loading ? 'Loading...' : 'Login'}
                </button>
                {message && (
                    <div className={`message bg-white text-black text-sm w-[300px] absolute top-[0%] p-2 rounded-md transition-opacity duration-500 ${message ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-center font-semibold">{message}</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Login;
