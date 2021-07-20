<template>
    <div id="footer_root">
        <div class="footer_service">
            <div class="service_list">
                <div class="service_item">
                    <span class="service_tit">

                    </span>
                    <p class="service_txt">

                    </p>
                </div>
            </div>
        </div>
        <div class="footer_help">
            <div class="help_list">
                <div class="help_item">
                    <p class="help_tit">

                    </p>
                    <ul class="help_txt">
                        <li>
                            <a>

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer_copyright">
            <div class="copyright_links">
                <a></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style lang="less" scoped>
    #footer_root{
        .footer_service{
            padding: 30px 0;
            border-bottom: 1px solid #dedede;
            margin: 0 auto;
            width: 1190px;
            .service_list{
                height: 42px;
                .service_item{
                    float: left;
                    width: 297px;
                    position: relative;
                    margin: 0 36px;
                    padding-left: 45px;
                    .service_tit{
                        overflow: hidden;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 36px;
                        height: 42px;
                        text-indent: -999px;
                    }
                    .service_txt{
                        overflow: hidden;
                        width: 100%;
                        height: 42px;
                        line-height: 42px;
                        font-size: 18px;
                        font-weight: 700;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #444;
                    }
                }
            }
        }
        .sm_footer_service{
            width: 990px;
            .service_list{
                .service_item{
                    width: 247px;
                    margin: 0 11px;
                }
            }
        }
        .footer_help{
            padding: 20px 0;
            margin: 0 auto;
            width: 1190px;
            overflow: hidden;
            .help_list{
                height: 160px;
                .help_item{
                    float: left;
                    width: 198px;
                    line-height: 22px;
                    .help_tit{
                        margin-bottom: 5px;
                        font-size: 14px;
                    }
                }
            }
        }
        .sm_footer_help{
            width: 990px;
            .help_item{
                width: 158px;
            }
        }
        .footer_copyright{
            width: 1190px;
            margin: 0 auto;
            padding: 15px 0;
            border-top: 1px solid #e1e1e1;
        }
        .sm_footer_ccopyright{
            width: 990px;
        }
    }
</style>