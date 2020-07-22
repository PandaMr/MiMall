<template>
    <div class="footer">
        <div class="container">
            <div class="logo">
                <img src="../assets/images/logo.png" />
            </div>
            <div >
                熊猫纸业&nbsp;&nbsp;|&nbsp;&nbsp;联系我们&nbsp;&nbsp;|&nbsp;&nbsp;使用条款／免责声明
            </div>
            <div class="copyright">
                Copyright © 2020 PandaMr Inc. 保留所有权利
                <a href="www.beian.miit.gov.cn">豫ICP备16013945号</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer'
}
</script>
<style lang="scss">
    .footer {
        width: 100%;
        border-top: 1px #e5e5e5 solid;
        margin-top: 10px;
        color: #333333;
        .container{
            width: 1226px;
            margin: 0 auto;
            .logo{
                img{
                    width: 100px;
                }
            }
            .copyright{
                a{
                    color: #333333;
                }
            }
        }
        
    }
</style>