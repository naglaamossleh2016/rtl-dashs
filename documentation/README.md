<div dir="rtl" align="right">

Gentelella Alela! - التوثيق

![](images/demo-template.png)

- [الملفات والمجلدات](#الملفات-والمجلدات)
- [الهيكل والتصميم](#الهيكل-والتصميم)
- [الاعتمادات](#الاعتمادات)

# مقدمة

مرحبًا بكم في **Gentelella**. لوحة تحكم كاملة ومستوية تدعم اللغة العربية مبنية على القالب الأصلي [Gentelella](https://github.com/puikinsh/gentelella).
تم تصميم هذا القالب باستخدام Bootstrap 3 ويستخدم أساليب تصميم حديثة لتلبية احتياجات مشاريعك بغض النظر عن حجمها.

**[عرض نموذج القالب](https://mortezakarimi.github.io/gentelella-rtl/public/index.html)**

## نطاق المعلومات المقدمة في هذا التوثيق

في هذا التوثيق، سنغطي فقط الهيكل العام للملفات والمجلدات بالإضافة إلى هيكل القالب. بالنسبة للتفاصيل الأخرى، يمكنك استخدام أدوات تحليل الكود مثل **Chrome Inspect** للحصول على مزيد من المعلومات حول الهيكل.

تم بناء القالب باستخدام Bootstrap 3، ويمكنك استخدام المعلومات المتاحة على الرابط التالي:

[http://getbootstrap.com/css/](http://getbootstrap.com/css/)

## البدء

يمكنك استخدام صفحة `plain_page.html` للحصول على قالب أساسي خام، ثم إضافة الأجزاء التي تحتاجها.

#### التثبيت باستخدام مدير الحزم

هدفي هو جعل هذه الحزمة قابلة للتثبيت باستخدام جميع مديري الحزم المختلفة. إذا لم يكن مدير الحزم الذي تريده مدرجًا أدناه، يمكنك تقديم طلب Pull Request.

فيما يلي بعض طرق تثبيت هذه الحزمة:

**تحميل أحدث إصدار من GitHub**

يمكنك أيضًا تحميل أحدث إصدار من خلال هذا الرابط.

[تحميل](https://github.com/mortezakarimi/gentelella-rtl/releases/latest)

**التثبيت باستخدام GitHub**

<div dir="LTR" align="left" style="direction:ltr;text-align:left;">

```
git clone https://github.com/mortezakarimi/gentelella-rtl.git -b 'gh-pages'
```

**Bower**

```
bower install gentelella-rtl --save
```

**npm**

```
npm install gentelella-rtl --save
```

</div>

## الملفات والمجلدات

<div dir="LTR" align="left" style="direction:ltr;text-align:left;">

```text
Root
├── build
│   ├── css
│   │   ├── maps
│   │   │   └── jquery-jvectormap-2.0.3.css
│   │   ├── custom.css
│   │   ├── custom.css.map
│   │   ├── custom.min.css
│   │   ├── daterangepicker.css
│   │   ├── daterangepicker.css.map
│   │   └── daterangepicker.min.css
│   ├── fonts
│   │   ├── B_Yekan.eot
│   │   ├── B_Yekan.svg
│   │   ├── B_Yekan.ttf
│   │   ├── B_Yekan.woff
│   │   ├── DroidKufi-Regular.eot
│   │   ├── DroidKufi-Regular.ttf
│   │   ├── DroidKufi-Regular.woff
│   │   ├── DroidKufi-Regular.woff2
│   │   ├── FontAweasome.otf
│   │   ├── FontAwesome.otf
│   │   ├── fontawesome-webfont.eot
│   │   ├── fontawesome-webfont.svg
│   │   ├── fontawesome-webfont.ttf
│   │   ├── fontawesome-webfont.woff
│   │   ├── fontawesome-webfont.woff2
│   │   ├── openSans-400.woff2
│   │   ├── openSans-600.woff2
│   │   ├── openSans-700.woff2
│   │   ├── Yekan-modified.eot
│   │   ├── Yekan-modified.ttf
│   │   └── Yekan-modified.woff
│   ├── images
│   │   ├── american-express.png
│   │   ├── cropper.jpg
│   │   ├── favicon.ico
│   │   ├── user.png
│   │   ├── inbox.png
│   │   ├── mastercard.png
│   │   ├── media.jpg
│   │   ├── paypal.png
│   │   ├── picture.jpg
│   │   ├── prod-1.jpg
│   │   ├── prod-2.jpg
│   │   ├── prod-3.jpg
│   │   ├── prod-4.jpg
│   │   ├── prod-5.jpg
│   │   ├── user.png
│   │   └── visa.png
│   └── js
│       ├── datepicker
│       │   └── daterangepicker.js
│       ├── helpers
│       │   └── smartresize.js
│       ├── moment
│       │   └── moment.min.js
│       ├── custom.js
│       └── custom.min.js
├── documentation
│   ├── images
│   │   ├── demo-template.png
│   │   ├── layout.png
│   │   ├── min_menu.png
│   │   ├── min_menu.tiff
│   │   ├── welcome.png
│   │   └── welcome.tiff
│   ├── plain_page.html
│   └── index.md
├── production
│   ├── calendar.html
│   ├── chartjs2.html
│   ├── chartjs.html
│   ├── contacts.html
│   ├── echarts.html
│   ├── e_commerce.html
│   ├── fixed_footer.html
│   ├── fixed_sidebar.html
│   ├── form_advanced.html
│   ├── form_buttons.html
│   ├── form.html
│   ├── form_upload.html
│   ├── form_validation.html
│   ├── form_wizards.html
│   ├── general_elements.html
│   ├── glyphicons.html
│   ├── icons.html
│   ├── inbox.html
│   ├── index2.html
│   ├── index3.html
│   ├── index.html
│   ├── invoice.html
│   ├── layout.html
│   ├── level2.html
│   ├── login.html
│   ├── media_gallery.html
│   ├── morisjs.html
│   ├── other_charts.html
│   ├── page_403.html
│   ├── page_404.html
│   ├── page_500.html
│   ├── plain_page.html
│   ├── pricing_tables.html
│   ├── profile.html
│   ├── project_detail.html
│   ├── projects.html
│   ├── tables_dynamic.html
│   ├── tables.html
│   ├── typography.html
│   ├── widgets.html
├── src
│   ├── js
│   │   ├── helpers
│   │   │   └── smartresize.js
│   │   └── custom.js
│   └── scss
│       ├── partials
│       │   ├── _extends.scss
│       │   ├── _grid.scss
│       │   ├── _utilis.scss
│       │   └── _variables.scss
│       ├── custom.scss
│       └── daterangepicker.scss
├── bower.json
├── changelog.md
├── config.rb
├── gulpfile.js
├── ISSUE_TEMPLATE.md
├── LICENSE.txt
├── package.json
├── README-EN.md
└── README.md

17 directories, 115 files
```

</div>

هيكل الملفات والمجلدات للمشروع كما هو موضح أعلاه. في هذا الهيكل، لم يتم عرض مجلد `vendors` الذي يحتوي على الملفات المطلوبة للمشروع. بالإضافة إلى ذلك، بعد التنفيذ، يتم إنشاء مجلد `public` الذي يحتوي على الملفات المترجمة للمشروع المناسبة للاستخدام في مرحلة الإنتاج.

## الهيكل والتصميم

- [الرأس](#الرأس)
- [القائمة العلوية](#القائمة-العلوية)
- [القائمة الجانبية](#القائمة-الجانبية)
- [المحتوى](#المحتوى)
- [التذييل](#التذييل)

#### الرأس

الكود المطلوب لقسم الرأس كما يلي.

<div dir="LTR" align="left" style="direction:ltr;text-align:left;">

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="../build/images/favicon.ico" type="image/ico" />
    <title>لوحة التحكم | القرار</title>

    <!-- Bootstrap -->
    <link
      href="../vendors/bootstrap/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="../vendors/bootstrap-rtl/dist/css/bootstrap-rtl.min.css"
      rel="stylesheet"
    />
    <!-- Font Awesome -->
    <link
      href="../vendors/font-awesome/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <!-- NProgress -->
    <link href="../vendors/nprogress/nprogress.css" rel="stylesheet" />
    <!-- bootstrap-progressbar -->
    <link
      href="../vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css"
      rel="stylesheet"
    />
    <!-- iCheck -->
    <link href="../vendors/iCheck/skins/flat/green.css" rel="stylesheet" />
    <!-- bootstrap-daterangepicker -->
    <link
      href="../vendors/bootstrap-daterangepicker/daterangepicker.css"
      rel="stylesheet"
    />

    <!-- إضافة الأنماط المطلوبة للصفحة هنا -->

    <!-- انتهاء الأنماط المطلوبة للصفحة هنا -->

    <!-- أنماط القالب المخصصة -->
    <link href="../build/css/custom.css" rel="stylesheet" />
  </head>
</html>
```

#### القائمة العلوية

الكود المطلوب للقائمة العلوية كما يلي.

```html
<!-- القائمة العلوية -->
<div class="top_nav hidden-print">
  <div class="nav_menu">
    <nav>
      <div class="nav toggle">
        <a id="menu_toggle"><i class="fa fa-bars"></i></a>
      </div>

      <ul class="nav navbar-nav navbar-right">
        <li class="">
          <a
            href="javascript:;"
            class="user-profile dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="../build/images/user.png" alt="" />نجلاء مصلح
            <span class=" fa fa-angle-down"></span>
          </a>
          <ul class="dropdown-menu dropdown-usermenu pull-right">
            <li><a href="javascript:;"> الملف الشخصي</a></li>
            <li>
              <a href="javascript:;">
                <span class="badge bg-red pull-right">50%</span>
                <span>الإعدادات</span>
              </a>
            </li>
            <li><a href="javascript:;">مساعدة</a></li>
            <li>
              <a href="login.html"
                ><i class="fa fa-sign-out pull-right"></i> تسجيل الخروج</a
              >
            </li>
          </ul>
        </li>

        <li role="presentation" class="dropdown">
          <a
            href="javascript:;"
            class="dropdown-toggle info-number"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa fa-envelope-o"></i>
            <span class="badge bg-green">6</span>
          </a>
          <ul
            id="menu1"
            class="dropdown-menu list-unstyled msg_list"
            role="menu"
          >
            <li>
              <a>
                <span class="image"
                  ><img src="../build/images/user.png" alt="صورة الملف الشخصي"
                /></span>
                <span>
                  <span>نجلاء مصلح</span>
                  <span class="time">منذ 3 دقائق</span>
                </span>
                <span class="message">
                  أفلام المهرجان التي تم عرضها تتحدث عن اللحظات الميتة التي
                  يصنعها صانعو الأفلام. كانوا في مكان حيث....
                </span>
              </a>
            </li>
            <li>
              <a>
                <span class="image"
                  ><img src="../build/images/user.png" alt="صورة الملف الشخصي"
                /></span>
                <span>
                  <span>نجلاء مصلح</span>
                  <span class="time">منذ 3 دقائق</span>
                </span>
                <span class="message">
                  أفلام المهرجان التي تم عرضها تتحدث عن اللحظات الميتة التي
                  يصنعها صانعو الأفلام. كانوا في مكان حيث....
                </span>
              </a>
            </li>
            <li>
              <a>
                <span class="image"
                  ><img src="../build/images/user.png" alt="صورة الملف الشخصي"
                /></span>
                <span>
                  <span>نجلاء مصلح</span>
                  <span class="time">منذ 3 دقائق</span>
                </span>
                <span class="message">
                  أفلام المهرجان التي تم عرضها تتحدث عن اللحظات الميتة التي
                  يصنعها صانعو الأفلام. كانوا في مكان حيث....
                </span>
              </a>
            </li>
            <li>
              <a>
                <span class="image"
                  ><img src="../build/images/user.png" alt="صورة الملف الشخصي"
                /></span>
                <span>
                  <span>نجلاء مصلح</span>
                  <span class="time">منذ 3 دقائق</span>
                </span>
                <span class="message">
                  أفلام المهرجان التي تم عرضها تتحدث عن اللحظات الميتة التي
                  يصنعها صانعو الأفلام. كانوا في مكان حيث....
                </span>
              </a>
            </li>
            <li>
              <div class="text-center">
                <a>
                  <strong>عرض جميع الإشعارات</strong>
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</div>
<!-- /القائمة العلوية -->
```

</div>

#### القائمة الجانبية

الكود المطلوب لقسم القائمة الجانبية كما يلي.

<div dir="LTR" align="left" style="direction:ltr;text-align:left;">

```html
<div class="col-md-3 left_col hidden-print">
  <div class="left_col scroll-view">
    <div class="navbar nav_title" style="border: 0;">
      <a href="index.html" class="site_title"
        ><img src="../build/images/logo2.png" alt="Logo" width="75px" /><span
          >الـــقـــرار</span
        ></a
      >
    </div>

    <div class="clearfix"></div>

    <!-- معلومات الملف الشخصي السريعة -->
    <div class="profile clearfix">
      <div class="profile_pic">
        <img
          src="../build/images/user.png"
          alt="..."
          class="img-circle profile_img"
        />
      </div>
      <div class="profile_info">
        <span>مرحبًا,</span>
        <h2>نجلاء مصلح</h2>
      </div>
    </div>
    <!-- /معلومات الملف الشخصي السريعة -->

    <br />

    <!-- القائمة الجانبية -->
    <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
      <div class="menu_section">
        <h3>عام</h3>
        <ul class="nav side-menu">
          <li>
            <a
              ><i class="fa fa-home"></i> الرئيسية
              <span class="fa fa-chevron-down"></span
            ></a>
            <ul class="nav child_menu">
              <li><a href="index.html">لوحة التحكم</a></li>
              <li><a href="index2.html">لوحة التحكم ۲</a></li>
              <li><a href="index3.html">لوحة التحكم ۳</a></li>
            </ul>
          </li>
          <li>
            <a
              ><i class="fa fa-edit"></i> النماذج<span
                class="fa fa-chevron-down"
              ></span
            ></a>
            <ul class="nav child_menu">
              <li><a href="form.html">نموذج عام</a></li>
              <li><a href="form_advanced.html">عناصر متقدمة</a></li>
              <li><a href="form_validation.html">نموذج التحقق</a></li>
              <li><a href="form_wizards.html">نموذج معالج</a></li>
              <li><a href="form_upload.html">نموذج تحميل</a></li>
              <li><a href="form_buttons.html">نموذج أزرار</a></li>
            </ul>
          </li>
          <li>
            <a
              ><i class="fa fa-desktop"></i> عناصر الواجهة
              <span class="fa fa-chevron-down"></span
            ></a>
            <ul class="nav child_menu">
              <li><a href="general_elements.html">عناصر عامة</a></li>
              <li><a href="media_gallery.html">معرض الوسائط</a></li>
              <li><a href="typography.html">الطباعة</a></li>
              <li><a href="icons.html">الأيقونات</a></li>
              <li><a href="glyphicons.html">Glyphicons</a></li>
              <li><a href="widgets.html">الأدوات</a></li>
              <li><a href="invoice.html">الفواتير</a></li>
              <li><a href="inbox.html">صندوق الوارد</a></li>
              <li><a href="calendar.html">التقويم</a></li>
            </ul>
          </li>
          <li>
            <a
              ><i class="fa fa-table"></i> الجداول
              <span class="fa fa-chevron-down"></span
            ></a>
            <ul class="nav child_menu">
              <li><a href="tables.html">الجداول</a></li>
              <li><a href="tables_dynamic.html">جدول ديناميكي</a></li>
            </ul>
          </li>
          <li>
            <a
              ><i class="fa fa-bar-chart-o"></i> عرض البيانات
              <span class="fa fa-chevron-down"></span
            ></a>
            <ul class="nav child_menu">
              <li><a href="chartjs.html">Chart JS</a></li>
              <li><a href="chartjs2.html">Chart JS2</a></li>
              <li><a href="morisjs.html">Moris JS</a></li>
              <li><a href="echarts.html">ECharts</a></li>
              <li><a href="other_charts.html">رسوم بيانية أخرى</a></li>
            </ul>
          </li>
          <li>
            <a
              ><i class="fa fa-clone"></i>التخطيط
              <span class="fa fa-chevron-down"></span
            ></a>
            <ul class="nav child_menu">
              <li><a href="fixed_sidebar.html">الشريط الجانبي الثابت</a></li>
              <li><a href="fixed_footer.html">التذييل الثابت</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="menu_section">
        <h3>مباشر</h3>
        <ul class="nav side-menu">
          <li>
            <a
              ><i class="fa fa-bug"></i> صفحات إضافية
              <span class="fa fa-chevron-down"></span
            ></a>
            <ul class="nav child_menu">
              <li><a href="e_commerce.html">التجارة الإلكترونية</a></li>
              <li><a href="projects.html">المشاريع</a></li>
              <li><a href="project_detail.html">تفاصيل المشروع</a></li>
              <li><a href="contacts.html">معلومات الاتصال</a></li>
              <li><a href="profile.html">الملف الشخصي</a></li>
            </ul>
          </li>
          <li>
            <a
              ><i class="fa fa-windows"></i> الإضافات المقترحة
              <span class="fa fa-chevron-down"></span
            ></a>
            <ul class="nav child_menu">
              <li><a href="page_403.html">403 خطأ</a></li>
              <li><a href="page_404.html">404 خطأ</a></li>
              <li><a href="page_500.html">500 خطأ</a></li>
              <li><a href="plain_page.html">صفحة بسيطة</a></li>
              <li><a href="login.html">صفحة تسجيل الدخول</a></li>
              <li><a href="pricing_tables.html">الجداول الأسعار</a></li>
            </ul>
          </li>
          <li>
            <a
              ><i class="fa fa-sitemap"></i> قائمة متعددة المستويات
              <span class="fa fa-chevron-down"></span
            ></a>
            <ul class="nav child_menu">
              <li><a href="#level1_1">المستوى الأول</a></li>
              <li>
                <a>المستوى الأول<span class="fa fa-chevron-down"></span></a>
                <ul class="nav child_menu">
                  <li class="sub_menu">
                    <a href="level2.html">المستوى الثاني</a>
                  </li>
                  <li><a href="#level2_1">المستوى الثاني</a></li>
                  <li><a href="#level2_2">المستوى الثاني</a></li>
                </ul>
              </li>
              <li><a href="#level1_2">المستوى الأول</a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)"
              ><i class="fa fa-laptop"></i> صفحة الوصول
              <span class="label label-success pull-left">قريبًا</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- /القائمة الجانبية -->

    <!-- أزرار تذييل القائمة -->
    <div class="sidebar-footer hidden-small">
      <a data-toggle="tooltip" data-placement="top" title="الإعدادات">
        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
      </a>
      <a
        data-toggle="tooltip"
        data-placement="top"
        title="ملء الشاشة"
        onclick="toggleFullScreen();"
      >
        <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
      </a>
      <a
        data-toggle="tooltip"
        data-placement="top"
        title="قفل"
        class="lock_btn"
      >
        <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
      </a>
      <a
        data-toggle="tooltip"
        data-placement="top"
        title="تسجيل الخروج"
        href="login.html"
      >
        <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
      </a>
    </div>
    <!-- /أزرار تذييل القائمة -->
  </div>
</div>
```

</div>

#### المحتوى

باستخدام الكود التالي، يمكنك إنشاء صفحة بسيطة باستخدام الأقسام الأخرى.

<div dir="LTR" align="left" style="direction:ltr;text-align:left;">

```html
<!-- محتوى الصفحة -->
<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>صفحة بسيطة</h3>
      </div>

      <div class="title_right">
        <div
          class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search"
        >
          <div class="input-group">
            <input type="text" class="form-control" placeholder="بحث عن..." />
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">اذهب!</button>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2>صفحة بسيطة</h2>
            <ul class="nav navbar-right panel_toolbox">
              <li>
                <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  ><i class="fa fa-wrench"></i
                ></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">الإعدادات 1</a></li>
                  <li><a href="#">الإعدادات 2</a></li>
                </ul>
              </li>
              <li>
                <a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">إضافة المحتوى إلى هذه الصفحة ...</div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /محتوى الصفحة -->
```

</div>

#### التذييل

<div dir="LTR" align="left" style="direction:ltr;text-align:left;">

```html
<!-- تذييل الصفحة -->
        <footer class="hidden-print">

          <div class="text-center">©2025 جميع الحقوق محفوظة
          </div>
            <div class="clearfix"></div>
        </footer>
        <!-- /تذييل الصفحة -->
    </div>
</div>
<div id="lock_screen">
    <table>
        <tr>
            <td>
                <div class="clock"></div>
                <span class="unlock">
                    <span class="fa-stack fa-5x">
                      <i class="fa fa-square-o fa-stack-2x fa-inverse"></i>
                      <i id="icon_lock" class="fa fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                </span>
            </td>
        </tr>
    </table>
</div>
<!-- jQuery -->
<script src="../vendors/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- FastClick -->
<script src="../vendors/fastclick/lib/fastclick.js"></script>
<!-- NProgress -->
<script src="../vendors/nprogress/nprogress.js"></script>
<!-- bootstrap-progressbar -->
<script src="../vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
<!-- iCheck -->
<script src="../vendors/iCheck/icheck.min.js"></script>

<!-- bootstrap-daterangepicker -->
<script src="../vendors/moment/min/moment.min.js"></script>

<script src="../vendors/bootstrap-daterangepicker/daterangepicker.js"></script>
<!-- إضافة نصوص الصفحة -->

<!-- انتهاء نصوص الصفحة -->

<!-- نصوص القالب المخصصة -->
<script src="../build/js/custom.min.js"></script>
</body>
</html>
```

</div>

في النهاية، يمكنك مشاهدة صفحة الكود الكاملة في [هذا](./plain_page.html) الرابط.

## الاعتمادات

| الاسم                     | الرابط                                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| jQuery                    | [http://jquery.com/](http://jquery.com/)                                                                             |
| jQuery Sparkline          | [http://omnipotent.net/jquery.sparkline/](http://omnipotent.net/jquery.sparkline/)                                   |
| Auto resize textarea      | [http://www.jacklmoore.com/autosize/](http://www.jacklmoore.com/autosize/)                                           |
| C3 charts                 | [http://c3js.org/](http://c3js.org/)                                                                                 |
| Full screen editor        | [http://burakson.github.io/fseditor/](http://burakson.github.io/fseditor/)                                           |
| jQuery Tags Input         | [https://github.com/xoxco/jQuery-Tags-Input](https://github.com/xoxco/jQuery-Tags-Input)                             |
| jQuery Validation Plugin  | [http://parsleyjs.org/](http://parsleyjs.org/)                                                                       |
| Colorpicker for Bootstrap | [https://github.com/xaguilars/bootstrap-colorpicker](https://github.com/xaguilars/bootstrap-colorpicker)             |
| bootstrap-daterangepicker | [https://github.com/dangrossman/bootstrap-daterangepicker](https://github.com/dangrossman/bootstrap-daterangepicker) |
| bootstrap-fileupload      | [http://blueimp.github.io/jQuery-File-Upload/](http://blueimp.github.io/jQuery-File-Upload/)                         |
| bootstrap-multiselect     | [https://github.com/davidstutz/bootstrap-multiselect](https://github.com/davidstutz/bootstrap-multiselect)           |
| bootstrap-wysihtml5       | [http://jhollingworth.github.io/bootstrap-wysihtml5/](http://jhollingworth.github.io/bootstrap-wysihtml5/)           |
| Dropzone                  | [http://www.dropzonejs.com/](http://www.dropzonejs.com/)                                                             |
| Bootstrap switch          | [https://github.com/nostalgiaz/bootstrap-switch](https://github.com/nostalgiaz/bootstrap-switch)                     |
| SwitcheryJs               | [http://abpetkov.github.io/switchery/](http://abpetkov.github.io/switchery/)                                         |
| DataTables                | [https://github.com/DataTables/DataTables](https://github.com/DataTables/DataTables)                                 |
| DataTables tools          | [https://github.com/DataTables/TableTools](https://github.com/DataTables/TableTools)                                 |
| easy pie chart            | [https://github.com/rendro/easy-pie-chart](https://github.com/rendro/easy-pie-chart)                                 |
| FullCalendar              | [https://github.com/arshaw/fullcalendar](https://github.com/arshaw/fullcalendar)                                     |
| jQuery Knob               | [https://github.com/aterrien/jQuery-Knob](https://github.com/aterrien/jQuery-Knob)                                   |
| select2                   | [https://github.com/ivaynberg/select2/](https://github.com/ivaynberg/select2/)                                       |
| jQuery-Autocomplete       | [https://github.com/devbridge/jQuery-Autocomplete](https://github.com/devbridge/jQuery-Autocomplete)                 |
| Twitter Bootstrap Wizard  | [https://github.com/VinceG/twitter-bootstrap-wizard](https://github.com/VinceG/twitter-bootstrap-wizard)             |
| E-Charts                  | [http://echarts.baidu.com/doc/example-en.html](http://echarts.baidu.com/doc/example-en.html)                         |
| Font Awesome              | [http://fortawesome.github.io/Font-Awesome/](http://fortawesome.github.io/Font-Awesome/)                             |

#### قالب Gentelella لإطارات عمل أخرى

<div dir="LTR" align="left" style="direction:ltr;text-align:left;">
  
* [Gentelella-rtl على إطار عمل Yii 2](https://github.com/mortezakarimi/yii2-gentelella-rtl) مع حزمة أصول، قالب تخطيط وبعض الأدوات. مستوحى من [Gentelella على إطار عمل Yii 2](https://github.com/yiister/yii2-gentelella)
* [Gentelella على Ruby on Rails 4](https://github.com/iogbole/gentelella_on_rails) بفضل Israel Ogbole.
* [Gentelella على Smarty 3](https://github.com/microvb/otp-thing) مع مولد كلمات مرور لمرة واحدة، مدقق، ومولد رمز QR لا يعتمد على الويب (مستقل) في PHP بفضل MicroVB INC
* [Gentelella مدمجة في Symfony 3](https://github.com/krzysiekpiasecki/Gentelella) إطار عمل PHP كامل بفضل Krzysztof Piasecki.
* [Gentelella على إطار عمل Yii 2](https://github.com/yiister/yii2-gentelella) مع حزمة أصول، قالب تخطيط وبعض الأدوات.
* [Gentelella على Angular 2](https://github.com/kmkatsma/angular2-webpack-starter-gentelella) Angular Webpack Starter معدل لاستخدام Gentelella.
* [Gentelella على Aurelia](https://github.com/kmkatsma/aurelia-gentelella) Typescript webpack skeleton معدل لاستخدام Gentelella.
</div>

أخبرنا إذا قمت بدمج هذا القالب مع منصات أو أطر عمل أخرى، وسنكون سعداء بمشاركة عملك.

</div>
