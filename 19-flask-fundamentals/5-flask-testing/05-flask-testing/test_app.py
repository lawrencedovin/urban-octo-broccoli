from app import app
from flask import session
from unittest import TestCase


app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']


def calculate_taxes(income):
        return income * .75

class ColorViewsTestCase(TestCase):
    # @classmethod
    # def setUpClass(cls):
    #     print("INSIDE SET UP CLASS")

    # @classmethod
    # def tearDownClass(cls):
    #     print("INSIDE TEAR DOWN CLASS")

    # def setUp(self):
    #     print("INSIDE SET UP")

    # def tearDown(self):
    #     print("INSIDE TEAR DOWN")

    def test_color_form(self):
        with app.test_client() as client:
            res = client.get('/')
            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code, 200)
            self.assertIn('<h1>Color Form</h1>', html)

    def test_color_submit(self):
        with app.test_client() as client:
            res = client.post('/fav-color', data={'color': 'orange'})
            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code, 200)
            self.assertIn('<h3>Woah! I like orange, too</h3>',  html)

    def test_redirection(self):
        with app.test_client() as client:
            res = client.get('/redirect-me')

            self.assertEqual(res.status_code, 302)
            self.assertEqual(res.location, 'http://localhost/')

    def test_redirection_followed(self):
        with app.test_client() as client:
            res = client.get('/redirect-me', follow_redirects=True)
            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code, 200)
            self.assertIn('<h1>Color Form</h1>', html)

    def test_session_count(self):
        with app.test_client() as client:
            res = client.get('/')

            self.assertEqual(res.status_code, 200)
            self.assertEqual(session['count'], 1)

    def test_session_count_set(self):
        with app.test_client() as client:
            with client.session_transaction() as change_session:
                change_session['count'] = 999

            res = client.get('/')

            self.assertEqual(res.status_code, 200)
            self.assertEqual(session['count'], 1000)

    def test_submit_taxes(self):
        with app.test_client() as client:
                res = client.post('/taxes', data={'income': '1000'})
                html = res.get_data(as_text=True)

                self.assertEqual(res.status_code, 200)
                self.assertIn('<h3>You owe $150</h3>', html)
    

    def test_calc_taxes(self):
        self.assertEqual(calculate_taxes(100), 15)
        self.assertEqual(calculate_taxes(100000), 15)
        self.assertEqual(calculate_taxes(0), 15)
        self.assertEqual(calculate_taxes(-2123), 15)
        self.assertEqual(calculate_taxes('ajshd'), 15)

