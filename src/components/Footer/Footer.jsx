import React from 'react'
import './Footer.css'
import github from '../../img/githubW.png'
import telegram from '../../img/telegramW.png'
import gmail from '../../img/gmail.png'

const Footer = () => {
    return (
        <div className="footer">
            <svg style={{width: "100%"}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="0 0 900 309">
                <image width="900" height="309" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAE1CAMAAACImd7wAAAChVBMVEVMaXH1wyz1wyv2wyr1wyv1wyv2wy31wy3zwy30wyv1wyv1wyv1wyv0wyv0wyz0wy31wyv0wiz0wyv1wy3//wD1wyz1wyvzwyn1xCf/qlX1wyz0wyv3wy30wiz/uS7/xjj0wiz0wiz0wyz/zDP0wyz0wyv1wyz1wiz0wivxySjwwy3/vz//vx/0wivvvy/0wiv1wyz1wiv/zDP1wivwxirzwiz1vy32wSv0wyz2wiz1wiz1wiz0vyr0wiz2xC3zxyz1wyv3vy/0wyvuuzP/tiT0wyz1wiv1wSv1win0wiz1wyr1wiz0wyvywCvzxS73wS71wyv0wiv1wizyxSz1wiv1xi/0wiz2wS31wyz1wiz1wyz/vyr0wyv0wyvrxCf0wiz0wyvzwyz0wyzsyCTywjD0wiz0wyz0wyv0wyz1wir0wyv1xCz2wiv0wyv0wyz2wiz1wiv2xCv1wyv3xCv0wyz1wiz0wyz4wi71wyz1wyv1wiz0wiv1wyv0wyzzwiz1wyvyvyb1wyz1wyv1wyv0wyvzxCz1wyz1wy30wyv0wiz1wyv2xSn0wiz1wiv0wiv1wyv0wiz0wyv0wSj0wSz0wyzywir//wD1wizzwyz1wiz1wiv0wir1wiv0wyv2wyr/1Cr0wiv1wiv1xCz1wiz2xCz0wyz1wyvzwSr1wiz1wyz1wyz1wyz1wiv1wiz0wir0wiz0wiv0wSv1wyz0wivzxCv1wiz0xCv0wyrzwi30wiv1wSr0wiv2wSv1wyz0xCr1wiv2wyz1wyz0wiz0wiv0wyv0wizzwyv2wiv1wyz1xCr1wiv1wyz0wSv1wyz0wiz1wiz0wS30wyvxxC30wiz0xCz0wyz1wyzoRBMzAAAA1nRSTlMAs4A8mU1VM0SRb7uIXsR3zPmqZgKi7isaA+bdIv0LCeX++AX3++fx9RMRBAj6EOTV6ArYElwcOvNyoPIYjz0X6iBjDwfaulM3ymvP/CkWIXCuuSjXG8M+iuzrDI30DdvARawOFbF42X1x3mhY46Y/hle0I2K/ySbOze2p0pUunhSFo/COW7g4dJS8H3+dxu+tkhlLeSoBg3NujEi1fB4GXaU0bTmWUkLUm2dspItlkExHmvZBvkZfQ8I2xx1RMGpWvdyYweFAO4lOadZkt7JQMt8n4Eqn6BnpYwAAAAlwSFlzAAALEwAACxMBAJqcGAAACc9JREFUeNrt3fV7XFUCx+FkkplMPMTThBYpUAoUaGlxKYvLYosui6wr7rKwLviy7u7u7u6av2efdgp02bZEZvKdmfu+v/Rp0x/uM+d8nju5955zOzqAnC19I+lDgAJbP9i/7/x8+iigqA4tj+41v036QKCQZqoTx8/vkD4WKKCe3iPnn5E+Giia95Sunf8f6QOCQtnSNzT/bOljguLYMNi/9/y8CCHj6YuhIoSAma7u4+d3J31w0P56eg+c34P04UGbO790+vyepY8Q2tmlu7gYKkJYKRsGOw947gRFCI2x+4uhIoTGG+/qPmiBBYoQ6m9q4MCFFyhCqLNLSq9YVIEihHqaXsjFUBFCgzxvgRdDRQiNcFp5Yt2SChQh1MHiLoaKEOpsamDVMgoUISzPQ8OLvhgqQqib6b6hfZedoAhhiZZ8MVSEUAeHfvbxtfUpUISweONdvVfVrUARwmIt+2KoCGEZ3vOcy+RFCI2zZUlPhooQ6qP2AiURQsaaSudCl8mLEOpupjpxTOMKFCHs2XhX7ykNLVCEsCdTpVc3ukARwm5tHd60AgWKEHZty7EjK1OgCGEXjtr1K8xECCtiw2DnYStYoAjhf6xZ+L7ZIoS6O7Q88aIVL1CEsMNMdWI5mzWJEJblkOsfmQwVKELY9lDM4t4dIUKoo3iBIqTQxrt6671KXoSwYE1SoAgpqPGu3n3S7YmQAuvpPTwdnggprvHLm6tAEVIsM830LVSEFM5MV++R6d5ESHEdWp54Uzo2EVJca8oTx6dLEyHFtaGSWRshQujYvka+kRuGihD27KEPfOe8dGAipLjm6vMWXRHCUoz3lF6QLkuEFNdp1Wa8IS9CimJjObZJhQih46WDnfulgxIhxTXXN7SSG/aKEHY201NauU3rRQjPsrrc3ZzPZYuQQrhgrAWeiBEh7Wq8tb+EipAWt7HcHd+qUIQU19ax1rwXIULaQtt8CRUhLengSneT7BUqQgpovGe4/4B0LyKksNrzFChCWsVUu54CRUgrOKrS3WILk0RIO5ka7j8sXYgIKayjbj6uxR8JFSEt7JCeYpwCRUhzmhsbbdq9skVI23tppfs36SRESGGtqQ6MtOraeBHS+ub6+temW8hFODnU3Vc9OT0GFNgJBbgVuOcIa3/sc8aJf37bS9KjQeFs+MMTrbRNb2N07PyXVf29Y10vTI8LBbG6OjBUoBsRu9fx//+0PcXV6RGira2ulvpbf3OYOunY3Q9WdQ4M9qxJjxVtaGPXsAB31rHHnx4wuy3F09KjRttY0zXc3047U9RFxwL+z2GznaXK1Ex6/Ghx2x5GK+59iD1YSIQ1ex0xWqpMjadHkpa0LcBvpSd7s1p4hDXHnP3I+7/x4/SQ0kpeeH3pnevSE72ZLTbCmoNGJobLc+nBpfmdUB4YchHmOSwtwprHRib6qu9KDzPNam6w+4hWeWN11HIirNn+3Nvz0wNOUzmkp2/0qvTcbhnLj7Dm8IuvPvUsz73R0XHU1wcucxdiMeoVYY2zYsFNV3oLuhxpOeobYc3rzjjxq0dvSM8HVtbGrmNHi70YYskaEWGNNVLFMTfYO+Qb6JI1LsKa7SmekJ4kNMx0udR5T3oWt7hGR1hz5C/e8ZobH0zPF+rrmm+//KLD0xO4HaxMhDWTIxPDnkFtCzNTg67A1M1KRliz1/aVGdYrtqzpcqnfU2j1tPIR1pz3y84rTj364PSEYlHmznzDX05JT9n2k4pwh8mR0VLFabEFbLsAo7/GCEdYs/er39r7s+pH35ueaOzK/q//Xu9lx6TnSDtrigh3WHfuve/bfJavqM3j4O+/6ri7LIJotGaKcIfJkdGBseqc82LUdLk0ag3EymjCCHc4/q7Rm0698dL0ZCyeE6p937zD5c8V1LwR7rDuvouuGKveun96ahbB+pNec//tV6ZHvHiaPsIdzvvX7Q+8cvPvptPztE0976zbrr7Y0y8hrRLhU/aa7e8ervSsT8/atrG+a2ygc9Yvf0mtFuFTJu9+8Ve+VP6pS6lLtv+df3v5cWcflB5IWjfCp6yd7Z8YGKtOeYPGwk1XxwZGR+wA2jRaPcKnHXj24ydeeOYP7Tu1ezNbr//jmzs3ue/XbNomwqfsd+11X/7ghTd33eo9Gk87+JM/H/7VGdeqr0m1XYTPmPz8xce94VM/+fSWwt7euGbq3+dcfdG5fu9rcm0c4dP2PfDcW75Q+mL5bRcU40nx/beetPndn+m877H0B8/CFCHCnaz7x486H7jpws3fff10250frzn/t5vffuK9j+5jsW2LKViEO7vyTz948TsePufMky45uYWDfPD8y99y7Js/8etNL0p/nixVgSPc2dpVRwx1TvSW+gbLXVPTh6TLeg5rpnvKg30DE51Ds1433QZEuAt7X3n6HW+94f73HXtq5UMn/X3u+fFfJT928iVHP/nxvtITb/zwo5tOOSD9+VBfIlyQyddtGnnny27ovuLht4+9tvy5njsvXb+xQcGtXn/BP3sur1Zu6/vI77v/c8t1d89eZUvP9ibCpVs7uWr2iJHL+v86+sbu7q8NDLxyePicsbHXViqVcnWbrp5dOXrbj56sVCqVt4yNvWr43QMDvd3do6Mv679u5AWz91jBXkAihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoSw/wIIT6eHp5jh5gAAAABJRU5ErkJggg=="></image>
            </svg>
            <div className="f-content">
                <a href='mailTo:nileshmukherjee1855@gmail.com' style={{ textAlign: "Center" }}>
                    <img src={gmail} alt="gmail" height={35} width={35} /><br></br>
                    nileshmukherjee1855@gmail.com
                </a>
                <div className="f-icons">
                    <a href="https://github.com/X-PROFESSOR/" target="_blank" rel="noreferrer">
                        <img src={github} alt="github" className='f-github' />
                    </a>
                    <a href="https://t.me/itsprofessorhere" target="_blank" rel="noreferrer">
                        <img src={telegram} alt="telegram" className='f-telegram' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer